import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
form:FormGroup=new FormGroup({
  current_pass:new FormControl(null,[Validators.required]),
  new_pass:new FormControl(null,[Validators.required]),
  re_pass:new FormControl(null,[Validators.required])
})
fun(x:FormGroup){
  console.log(x.value);
  
}
}
