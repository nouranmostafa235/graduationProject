import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-institution-login',
  templateUrl: './institution-login.component.html',
  styleUrls: ['./institution-login.component.css']
})
export class InstitutionLoginComponent {
  login: FormGroup;

  constructor(private router: Router, private _service: SignInService) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  signIn() {
    if (this.login.valid) {
      const clinicData = this.login.value;
      this._service.clinicLogin(clinicData).subscribe({
        next: (response) => {
          localStorage.setItem('clinicTokin', "Bearer " + response.token);
          this.router.navigate(['/clinic/Home']);
        },
        error: (err) => {
          console.error(err);
          alert('An error occurred. Please try again later.');
        }
      });
    } else {
      this.login.markAllAsTouched();
      alert('Please fill in the form correctly.');
    }
  }

  get username() {
    return this.login.get('username');
  }

  get password() {
    return this.login.get('password');
  }
}
