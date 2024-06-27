import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

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
    bmi: new FormControl(),
    HbA1c_level: new FormControl(),
    blood_glucose_level: new FormControl(),
    smoking_history: new FormControl(),
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
  predict() {
    const formValue = this.predictForm.value;
    this.userData.getPrediction(formValue).subscribe({
      next: (response) => {
        console.log(response.message);
        this.message = response.message;
        this.flag = true;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}
