import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationFormService } from 'src/app/registeration-form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  firstName=''
  lastName=''
  email=''
  phone=''
  age=''
  gender=''
  address=''
  password=''
  maritalStatus=''
  profile_images:File|null=null;
 constructor(private _regForm:RegisterationFormService ,private route:Router){}
 onFileSelect(event: any) {
  this.profile_images=event.target.files[0];
  if(this.profile_images){
     this._regForm.setFile(this.profile_images)
  }
 
}
saveData(){
  this._regForm.setFormData({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phone: this.phone,
    age: this.age,
    gender: this.gender,
    address: this.address,
    password:this.password,
    maritalStatus:this.maritalStatus,
  })
  
  this.route.navigate(['/medical_info'])
}


}
