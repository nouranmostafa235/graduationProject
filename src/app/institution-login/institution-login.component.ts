import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-institution-login',
  templateUrl: './institution-login.component.html',
  styleUrls: ['./institution-login.component.css']
})
export class InstitutionLoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })

signIn(){
  const clinicData= this.login.value
   this._service.clinicLogin(clinicData).subscribe({
    next:(response)=>{
      localStorage.setItem('clinicTokin',"Bearer "+response.token)
      this.router.navigate(["/clinic/Home"])
    },
    error:(err)=>{        
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.error.error,
      });
    }
   })
}

}

