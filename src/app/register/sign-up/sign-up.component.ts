import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationFormService } from 'src/app/registeration-form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  profile_images: File | null = null;

  constructor(
    private fb: FormBuilder,
    private _regForm: RegisterationFormService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+\d{1,2}\s\d{3}\s\d{3}\s\d{4}$/)]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      maritalStatus: ['', Validators.required],
    });
  }

  onFileSelect(event: any): void {
    this.profile_images = event.target.files[0];
    if (this.profile_images) {
      this._regForm.setFile(this.profile_images);
    }
  }

  saveData(): void {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      formData.profile_images = this.profile_images;

      this._regForm.setFormData(formData);
      this.router.navigate(['/medical_info']);
    } else {
      
      this.markFormGroupTouched(this.signUpForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
