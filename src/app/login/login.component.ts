import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from '../sign-in.service';
import { response } from 'express';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })

  handle(reg:FormGroup){
    this._service.login(reg.value).subscribe({
      next:(response)=>{
       
        if(response.message === "Sign in successful"){
          localStorage.setItem('Authorization',response.token)
          this._service.decodeToken()
          this.router.navigate(['/profile'])
        }
        },
      error:(err)=>console.log(err),
    })
}


}
