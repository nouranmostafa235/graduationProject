import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit{
  labForm:FormGroup;
  constructor(private signIn:SignInService, private fb:FormBuilder ,private adminServics:AdminService ,private router:Router){
    this.labForm= this.fb.group({
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
    return this.labForm.get('branches') as FormArray;
  }
  get contactNumbers() {
    return this.labForm.get('contactNumbers') as FormArray;
  }

  get socialMedia() {
    return this.labForm.get('socialMedia') as FormArray;
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

  addlab(form:FormGroup){
    this.adminServics.addlab(form).subscribe({
        next:(response)=>{
            console.log(response);  
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([this.router.url]);
              });  
        }
    })
    }

  tryarr:any[]=[]
  ngOnInit(): void {
      this.adminServics.getlabs().subscribe({
        next:(response)=>{
            this.tryarr=response;
            console.log(response);
        }
      })
  }


}
