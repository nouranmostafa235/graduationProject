import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-lab-login',
  templateUrl: './lab-login.component.html',
  styleUrls: ['./lab-login.component.css']
})
export class LabLoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
  signIn(){
    const labData= this.login.value
    this._service.labLogin(labData).subscribe({
      next:(response)=>{
        localStorage.setItem('labTokin',"Bearer "+response.token)
        this.router.navigate(['/lab/Home'])
      }
    })
  }
}
