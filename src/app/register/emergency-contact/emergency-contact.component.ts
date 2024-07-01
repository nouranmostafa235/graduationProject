import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { RegisterationFormService } from 'src/app/registeration-form.service';
@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent {
  form:FormGroup=new FormGroup({});
  handle(){
    const formData = this.form.value;
 
    // const localStorageValue = localStorage.getItem('uploadedImage');
    // if (localStorageValue) {
    //   formData['profileImage'] = localStorageValue;
    // }
    this._reg.handlrRegistration(formData).subscribe({
      next:(response)=>{
        console.log("---------formm-",response);
        console.log( "imageeee",formData['profileImage']);
        
      }
    })
    
  }

constructor(private _reg:RegisterationFormService, private router: Router){
  this.form=this._reg.registerForm;
}
  get emergencyContacts(): FormArray {
    return this.form.get('emergencyContacts') as FormArray;
  }
}
