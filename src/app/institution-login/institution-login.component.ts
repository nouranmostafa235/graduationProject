import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
@Component({
  selector: 'app-institution-login',
  templateUrl: './institution-login.component.html',
  styleUrls: ['./institution-login.component.css']
})
export class InstitutionLoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })



}
