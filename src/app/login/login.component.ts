import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  })
  errorMessage:any
  handle(reg:FormGroup){
    this._service.login(reg.value).subscribe({
      next:(response)=>{
        if(response.message === "Sign in successful"){
          localStorage.setItem('Authorization',"Bearer "+response.token)
          this._service.decodeToken()
          this.router.navigate(['/UserProfile/profile'])
        }
        },
      error:(err)=>{
        console.log(err);
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.message,
        });
      },
    })
}


}
