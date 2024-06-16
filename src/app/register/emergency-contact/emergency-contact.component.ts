import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterationFormService } from 'src/app/registeration-form.service';
@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent {
  form:FormGroup=new FormGroup({});
  handle(reg:FormGroup){
      console.log(reg.value)
  }
constructor(_reg:RegisterationFormService){
  this.form=_reg.registerForm;
}

}
