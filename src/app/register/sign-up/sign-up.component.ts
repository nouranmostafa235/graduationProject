import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationFormService } from 'src/app/registeration-form.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit{
  signUpForm: FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('^01[0-9]{9}$')]],
      age:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required],
      repassword:['',Validators.required],
      maritalStatus:['',Validators.required],
    })
  }
  
  profile_images:File|null=null;
  constructor(private fb: FormBuilder, private _regForm: RegisterationFormService, private route: Router) {}
 onFileSelect(event: any) {
  this.profile_images=event.target.files[0];
  if(this.profile_images){
     this._regForm.setFile(this.profile_images)
  }
 
}
matchPassword(password:any, repassword:any){
  
}
saveData(){
  // this._regForm.setFormData({
    // firstName: this.firstName,
    // lastName: this.lastName,
    // email: this.email,
    // phone: this.phone,
    // age: this.age,
    // gender: this.gender,
    // address: this.address,
    // password:this.password,
    // maritalStatus:this.maritalStatus,
    if(this.signUpForm.valid){
          this._regForm.setFormData(this.signUpForm.value);
          this.route.navigate(['/medical_info']);
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter correct data",
      });
    }

  // })
  
  // this.route.navigate(['/medical_info'])
}


}
