import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  predictForm: FormGroup;
  data: any;
  message: string = "";
  flag: boolean = false;

  constructor(private userData: UserDataService, private router: Router) {
    this.predictForm = new FormGroup({
      bmi: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(50)]),
      HbA1c_level: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
      blood_glucose_level: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(500)]),
      smoking_history: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
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
        console.error('Logout error:', err);
      }
    });
  }

  predict(): void {
    if (this.predictForm.valid) {
      const formValue = this.predictForm.value;
      this.userData.getPrediction(formValue).subscribe({
        next: (response) => {
          this.message = response.message;
          this.flag = true;
          Swal.fire('Prediction Result', this.message, 'success');
        },
        error: (err) => {
          console.error('Prediction error:', err);
          Swal.fire('Prediction Failed', 'An error occurred while predicting.', 'error');
        }
      });
    } else {
      this.markFormGroupTouched(this.predictForm);
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
