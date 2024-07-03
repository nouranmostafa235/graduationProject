import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  data: any;
  isUpdated: boolean = false;

  constructor(private userData: UserDataService, private router: Router) {
    this.form = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      }
    });
  }

  logOut(): void {
    this.userData.logOut().subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error logging out:', err);
      }
    });
  }

  handle(): void {
    if (this.form.valid) {
      this.userData.changePass(this.form.value).subscribe({
        next: (response) => {
          if (response.message === 'Password updated successfully') {
            this.isUpdated = true;
          }
        },
        error: (err) => {
          console.error('Error updating password:', err);
        }
      });
    } else {
      this.markFormGroupTouched(this.form);
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
