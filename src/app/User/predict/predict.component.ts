import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  constructor(private userData: UserDataService ,private router:Router) { }
  flag = false;
  data: any
  message: string = ""
  predictForm: FormGroup = new FormGroup({
    bmi: new FormControl(null),
    HbA1c_level: new FormControl(null),
    blood_glucose_level: new FormControl(null),
    smoking_history: new FormControl(null),
  })
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (res) => {
        this.data = res
      }
    })
  }
  logOut() {
    this.userData.logOut().subscribe({
      next: (response) => {
        this.router.navigate(['/login'])
      }
    })
  }
  predict(): void {
    const formValue = this.predictForm.value;

    // Show loading SweetAlert
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait while we process your data.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.userData.getPrediction(formValue).subscribe({
      next: (response) => {
        console.log(response.message);
        this.message = response.message;
        this.flag = true;

        // Update SweetAlert with the response message
        Swal.fire({
          title: 'Prediction Result',
          text: this.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error: (err) => {
        console.error('Error:', err);

        // Update SweetAlert with the error message
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while processing your request. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

}

