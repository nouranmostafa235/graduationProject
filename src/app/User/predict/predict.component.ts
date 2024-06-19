import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent {
   flag=false;
   predictForm:FormGroup=new FormGroup({
    bmi:new FormControl(),
    hba1c:new FormControl(),
    bloodGlucoseLevel:new FormControl(),
    smokingHistory:new FormControl(),
   })
   submit(form:FormGroup){
    console.log(form);
   }
}
