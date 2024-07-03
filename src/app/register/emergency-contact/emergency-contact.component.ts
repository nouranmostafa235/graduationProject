import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterationFormService } from 'src/app/registeration-form.service';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  emergencyContactForm: FormGroup;

  constructor(private _reg: RegisterationFormService, private fb: FormBuilder) {
    this.emergencyContactForm = this.fb.group({
      emergencyContacts: this.fb.array([
        this.createEmergencyContact(),
        this.createEmergencyContact()
      ])
    });
  }

  ngOnInit(): void {}

  get emergencyContacts(): FormArray {
    return this.emergencyContactForm.get('emergencyContacts') as FormArray;
  }

  createEmergencyContact(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+\d{1,2}\s\d{3}\s\d{3}\s\d{4}$/)]]
    });
  }

  addItem(): void {
    this.emergencyContacts.push(this.createEmergencyContact());
  }

  removeItem(index: number): void {
    this.emergencyContacts.removeAt(index);
  }

  submitForm(): void {
    if (this.emergencyContactForm.valid) {
      const formData = this.emergencyContactForm.value;
      this._reg.setFormData(formData);

      const formDataa = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && key !== 'profile_images') {
          formDataa.append(key, JSON.stringify(formData[key]));
        }
      }

      if (formData.profile_images) {
        formDataa.append('profile_images', formData.profile_images, formData.profile_images.name);
      }

      formDataa.forEach((value, key) => {
        console.log(key, value);
      });

      this._reg.handleRegister(formDataa).subscribe({
        next: (response) => {
          console.log(response);
          Swal.fire('Success', 'Form submitted successfully!', 'success');
        },
        error: (err) => {
          console.error('Error submitting form', err);
          Swal.fire('Error', 'Failed to submit form. Please try again later.', 'error');
        }
      });
    } else {
      Swal.fire('Warning', 'Please fill in all required fields correctly.', 'warning');
      this.markFormGroupTouched(this.emergencyContactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    (Object as any).values(formGroup.controls).forEach((control: AbstractControl) => {
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
