import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private userData:UserDataService){

  }
form:FormGroup=new FormGroup({
  oldPassword:new FormControl(null,[Validators.required]),
  newPassword:new FormControl(null,[Validators.required]),
})
isUpdated:boolean=false
handle(reg:FormGroup){
  this.userData.changePass(reg.value).subscribe({
    next:(response)=>{
      if(response.message === "Password updated successfully")
      {
        this.isUpdated=true
      }
      },
    error:(err)=>console.log(err),
  })
}
}
