import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-lab-login',
  templateUrl: './lab-login.component.html',
  styleUrls: ['./lab-login.component.css']
})
export class LabLoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
}
