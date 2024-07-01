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
 constructor(private _regForm:RegisterationFormService){
  this.form=this._regForm.registerForm;
 }
handleFileChange(event: any) {
  // this._regForm.handleFileChange(event)
  // const file = event.target.files[0];
  // console.log("fileee",file);
  
  // const filePath = URL.createObjectURL(file);
  // localStorage.setItem('uploadedImage', file);
}
}
