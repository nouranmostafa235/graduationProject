import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  login:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
    role:new FormControl(null),
  })

  handle(reg:FormGroup){
    console.log(reg.value)
}
navtoReg(){
  console.log(this.login.value)
  this.router.navigate(['/profile'])
    }
}
