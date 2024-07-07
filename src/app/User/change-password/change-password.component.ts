import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private userData:UserDataService, private router:Router){

  }
  data:any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next:(res)=>{
        this.data=res
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
    error:(err)=>{
      Swal.fire({
        icon: "success",
        // title: "Oops...",
        text: "Passord Changes Sucessfullly",
      });
    },
  })
}

}
