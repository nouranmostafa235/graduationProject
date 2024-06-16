import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationFormService } from 'src/app/registeration-form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
form:FormGroup=new FormGroup({});
 constructor(_regForm:RegisterationFormService){
  this.form=_regForm.registerForm;
 }
  
}
