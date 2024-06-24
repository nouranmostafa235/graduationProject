import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent {
  constructor(private userData:UserDataService){}
   flag=false;
   message:string=""
   predictForm:FormGroup=new FormGroup({
    bmi:new FormControl(),
    HbA1c_level:new FormControl(),
    blood_glucose_level:new FormControl(),
    smoking_history:new FormControl(),
   })

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
