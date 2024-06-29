import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SignInService } from 'src/app/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit{
  labForm:FormGroup;
  editLabform:FormGroup=new FormGroup({});
  selectedItem:any
  labId:any
  searchValue:string=""
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

  addlab(){
    const labForm= this.labForm.value
    this.adminServics.addlab(labForm).subscribe({
        next:(response)=>{
            console.log(response);    
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
      this.editLabform=this.fb.group({
        _id:[''],
        name:[''],
        about:[''],
        branches: this.fb.array([]),
        contactNumbers: this.fb.array([]),
        password:[''],
        socialMedia: this.fb.array([]),
        username:['']

      });
  }
  deleteRow(id:any){
    this.adminServics.deleteLabs(id).subscribe({
     next:(response)=>{
     }
    })
  }

  confirmDelete(id:any){
    Swal.fire({
      title: "Are you sure to delete?",
      showCancelButton: true,
      cancelButtonText:"Cancel",
      confirmButtonText: "Yes, Delete",
      icon:'error',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteRow(id)
        Swal.fire("Deleted!", "", "success").then(() => {
          this.adminServics.getlabs().subscribe({
            next:(response)=>{
                this.tryarr=response;
            }
          })
        });
      } 
    });
  }
  editRow(item:any){
    this.selectedItem=item;
    this.labId=item._id
    this.editLabform.patchValue({
      _id : item._id,
      name: item.name,
      about : item.about,
      password: item.password,
      username:item.username
    });
    this.setBranches(item.branches);
    this.setContactNumbers(item.contactNumbers);
    this.setSocialMedia(item.socialMedia);
  }


  setBranches(branches:any[]){
    const branchFormArray = this.editLabform.get('branches') as FormArray;
    branchFormArray.clear();
    branches.forEach(branch => {
      branchFormArray.push(this.fb.group({
        name: branch.name,
        address: branch.address,
        phone: branch.phone,
        _id: branch._id
      }));
    });
  }
  setContactNumbers(contactNumbers: any[]) {
    const contactNumbersFormArray = this.editLabform.get('contactNumbers') as FormArray;
    contactNumbersFormArray.clear();
    contactNumbers.forEach(contact => {
      contactNumbersFormArray.push(new FormControl(contact));
    });
  }
  setSocialMedia(socialMedia: any[]) {
    const socialMediaFormArray = this.editLabform.get('socialMedia') as FormArray;
    socialMediaFormArray.clear();
    socialMedia.forEach(platform => {
      socialMediaFormArray.push(this.fb.group({
        platform: platform.platform,
        link: platform.link,
        _id: platform._id
      }));
    });
  }

  addBranchToEditForm(): void {
    const branchFormArray = this.editLabform.get('branches') as FormArray;
    branchFormArray.push(this.fb.group({
      name: [''],
      address: [''],
      phone: ['']
    }));
  }
  
  removeBranchFromEditForm(index: number): void {
    const branchFormArray = this.editLabform.get('branches') as FormArray;
    branchFormArray.removeAt(index);
  }
  
  addSocialMediaToEditForm(): void {
    const socialMediaFormArray = this.editLabform.get('socialMedia') as FormArray;
    socialMediaFormArray.push(this.fb.group({
      platform: [''],
      link: ['']
    }));
  }
  
  removeSocialMediaFromEditForm(index: number): void {
    const socialMediaFormArray = this.editLabform.get('socialMedia') as FormArray;
    socialMediaFormArray.removeAt(index);
  }
  
  addContactNumberToEditForm(): void {
    const contactNumbersFormArray = this.editLabform.get('contactNumbers') as FormArray;
    contactNumbersFormArray.push(this.fb.control(''));
  }
  
  removeContactNumberFromEditForm(index: number): void {
    const contactNumbersFormArray = this.editLabform.get('contactNumbers') as FormArray;
    contactNumbersFormArray.removeAt(index);
  }

  submitEdit(id:any) {
    const val = this.editLabform.value
    this.adminServics.editLabs(id,val).subscribe(response => {
      console.log(response);
      
    });
  }
  saveEdits(id:any){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.submitEdit(id)
        Swal.fire("Saved!", "", "success").then(() => {
          this.adminServics.getlabs().subscribe({
            next:(response)=>{
                this.tryarr=response;
            }
          })
        });;
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  getBranchesControls() {
    return (this.editLabform.get('branches') as FormArray).controls;
  }

  getContactNumbersControls() {
    return (this.editLabform.get('contactNumbers') as FormArray).controls;
  }

  getSocialMediaControls() {
    return (this.editLabform.get('socialMedia') as FormArray).controls;
  }
reload(){
  location.reload()
}
  save(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.addlab()
        Swal.fire("Saved!", "", "success").then(() => {
          this.reload();
        });;
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}
