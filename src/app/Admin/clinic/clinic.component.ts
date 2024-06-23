import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit{
  clinicForm:FormGroup;
  constructor(private fb:FormBuilder ,private adminServics:AdminService ,private router:Router){
    this.clinicForm= this.fb.group({
        name:[""],
        username:[''],
        password:[''],
        about:[''],
        branches: this.fb.array([this.createBranches()]),
        contactNumbers: this.fb.array(['']),
        socialMedia:this.fb.array([this.createSocialMedia()])
    });
  }
  get branches() {
    return this.clinicForm.get('branches') as FormArray;
  }
  get contactNumbers() {
    return this.clinicForm.get('contactNumbers') as FormArray;
  }

  get socialMedia() {
    return this.clinicForm.get('socialMedia') as FormArray;
  }

  createBranches():FormGroup{
   return this.fb.group({
    name:[''],
    address:[''],
    phone:[''],
   });
  }
  
  addBranch(): void {
    this.branches.push(this.createBranches());
  }
  removeBranch(index: number): void {
    this.branches.removeAt(index);
  }

 createSocialMedia(): FormGroup {
    return this.fb.group({
      platform: [''],
      link: ['']
    });
  }

  addSocialMedia(): void {
    this.socialMedia.push(this.createSocialMedia());
  }

  removeSocialMedia(index: number): void {
    this.socialMedia.removeAt(index);
  }

  addContactNumber(): void {
    this.contactNumbers.push(this.fb.control(''));
  }

  removeContactNumber(index: number): void {
    this.contactNumbers.removeAt(index);
  }
  addClinic(form:FormGroup){
    const plainFormValue = this.toPlainObject(form);
    console.log(plainFormValue);
    this.adminServics.addClinic(plainFormValue).subscribe({
        next: (response) => {
            console.log(response);
        }
    });
    }
    private toPlainObject(formGroup: FormGroup): { [key: string]: any } {
      const result: { [key: string]: any } = {};
      Object.keys(formGroup.controls).forEach(key => {
          const control:any = formGroup.get(key);
          if (control instanceof FormGroup) {
              result[key] = this.toPlainObject(control);
          } else if (control instanceof FormArray) {
              result[key] = control.controls.map(c => {
                  if (c instanceof FormGroup) {
                      return this.toPlainObject(c);
                  }
                  return c.value;
              });
          } else {
              result[key] = control.value;
          }
      });
      return result;
    }
  
  
  tryarr:any[]=[]
  ngOnInit(): void {
      this.adminServics.getClinics().subscribe({
        next:(response)=>{
            this.tryarr=response;
            console.log(response);
        }
      })
  }


}
