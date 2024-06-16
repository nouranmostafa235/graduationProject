import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationFormService } from 'src/app/registeration-form.service';
@Component({
  selector: 'app-medical-info',
  templateUrl: './medical-info.component.html',
  styleUrls: ['./medical-info.component.css']
})
export class MedicalInfoComponent {
  form:FormGroup=new FormGroup({});
  constructor(_regForm:RegisterationFormService){
   this.form=_regForm.registerForm;
  }
}
