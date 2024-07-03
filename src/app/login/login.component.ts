import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup;

  constructor(private router: Router, private _service: SignInService) {
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  handle(reg: FormGroup) {
    if (reg.valid) {
      this._service.login(reg.value).subscribe({
        next: (response) => {
          if (response.message === 'Sign in successful') {
            localStorage.setItem('Authorization', 'Bearer ' + response.token);
            this._service.decodeToken();
            this.router.navigate(['/UserProfile/profile']);
          } else {
            Swal.fire('Error', 'Invalid credentials. Please try again.', 'error');
          }
        },
        error: (err) => {
          console.error('Login error', err);
          Swal.fire('Error', 'Login failed. Please check your credentials and try again.', 'error');
        }
      });
    } else {
      reg.markAllAsTouched(); 
      Swal.fire('Warning', 'Please fill in the form correctly.', 'warning');
    }
  }

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }
}
