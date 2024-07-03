import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
  handleLogin(form:FormGroup){
     this._service.adminLogin(form.value).subscribe({
      next:(response)=>{
        if(response.message === "Sign in successful"){
          localStorage.setItem('Admintoken',"Bearer "+response.token)
          this._service.decodeAdminToken()
          this.router.navigate(['/adminHomePage'])
        }
      },
      error:(err)=>console.log(err)
     })
  }
}
