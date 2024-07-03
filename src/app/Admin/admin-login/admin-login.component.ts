import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  login: FormGroup;

  constructor(private router: Router, private _service: SignInService) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  handleLogin() {
    if (this.login.valid) {
      this._service.adminLogin(this.login.value).subscribe({
        next: (response) => {
          if (response.message === "Sign in successful") {
            localStorage.setItem('Admintoken', "Bearer " + response.token);
            this._service.decodeAdminToken();
            this.router.navigate(['/adminHomePage']);
          } else {
            alert('Login failed. Please try again.');
          }
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
