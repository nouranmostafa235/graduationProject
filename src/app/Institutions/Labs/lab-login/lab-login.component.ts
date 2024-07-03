import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lab-login',
  templateUrl: './lab-login.component.html',
  styleUrls: ['./lab-login.component.css']
})
export class LabLoginComponent {
  login: FormGroup;

  constructor(private router: Router, private _service: SignInService) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  signIn() {
    if (this.login.valid) {
      const labData = this.login.value;
      this._service.labLogin(labData).subscribe({
        next: (response) => {
          localStorage.setItem('labTokin', "Bearer " + response.token);
          this.router.navigate(['/lab/Home']);
        },
        error: (err) => {
          console.error('Error during login', err);
          Swal.fire('Error', 'Login failed. Please check your credentials.', 'error');
        }
      });
    } else {
      this.login.markAllAsTouched(); 
      Swal.fire('Warning', 'Please fill in the form correctly.', 'warning');
    }
  }

  get username() {
    return this.login.get('username');
  }

  get password() {
    return this.login.get('password');
  }
}
