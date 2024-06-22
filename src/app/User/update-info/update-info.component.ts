import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faL, faWeight } from '@fortawesome/free-solid-svg-icons';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements AfterViewInit ,OnInit {
  constructor(private userData:UserDataService){}
  name: any;
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    gender: new FormControl,
    address: new FormControl,
    weight: new FormControl,
    height: new FormControl,
    bloodType: new FormControl,

  });
  data:any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }
  ngAfterViewInit() {
    this.form = new FormGroup({
      firstName: new FormControl((document.getElementById("firstName") as HTMLElement).innerHTML),
      lastName: new FormControl((document.getElementById("lastName") as HTMLElement).innerHTML),
      email: new FormControl(null),
      phone: new FormControl(null),
      gender: new FormControl((document.getElementById("gender") as HTMLElement).innerHTML),
      address: new FormControl((document.getElementById("address") as HTMLElement).innerHTML),
      weight: new FormControl((document.getElementById("weight") as HTMLElement).innerHTML),
      height: new FormControl((document.getElementById("height") as HTMLElement).innerHTML),
      bloodType: new FormControl((document.getElementById("bloodType") as HTMLElement).innerHTML),
    });
    const table = document.getElementById('modalTable');
    const tdElements = table?.querySelectorAll('td');
    tdElements?.forEach(td => {
      const iElement = td.querySelector('i.fa-check');
      if (iElement) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        td.replaceChild(checkbox, iElement);
      } else {
        const labelElement = td.querySelector('label');
        if (labelElement) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.insertBefore(checkbox, labelElement);
        } else {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.appendChild(checkbox);
        }
      }
    });


    const table2 = document.getElementById('modalTable2');
    const tdElements2 = table2?.querySelectorAll('td');
    tdElements2?.forEach(td => {
      const iElement = td.querySelector('i.fa-check');
      if (iElement) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        td.replaceChild(checkbox, iElement);
      } else {
        const labelElement = td.querySelector('label');
        if (labelElement) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.insertBefore(checkbox, labelElement);
        } else {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.appendChild(checkbox);
        }
      }
    });
    const table3 = document.getElementById('modalTable3');
    const tdElements3 = table3?.querySelectorAll('td');
    tdElements3?.forEach(td => {
      const iElement = td.querySelector('i.fa-check');
      if (iElement) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        td.replaceChild(checkbox, iElement);
      } else {
        const labelElement = td.querySelector('label');
        if (labelElement) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.insertBefore(checkbox, labelElement);
        } else {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.appendChild(checkbox);
        }
      }
    });
    const table4 = document.getElementById('modalTable4');
    const tdElements4 = table4?.querySelectorAll('td');
    tdElements4?.forEach(td => {
      const iElement = td.querySelector('i.fa-check');
      if (iElement) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        td.replaceChild(checkbox, iElement);
      } else {
        const labelElement = td.querySelector('label');
        if (labelElement) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.insertBefore(checkbox, labelElement);
        } else {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          td.appendChild(checkbox);
        }
      }
    });
  }
  header:any={
    token:localStorage.getItem('Authorization')
  }
  fun(reg:FormGroup){
    console.log(this.header)

  }
  isUpdated:boolean=false
updateInfo(form:FormGroup){
  this.userData.updateInfo(form.value).subscribe({
    next:(response)=>{
      if(response.message==="updated successfully"){
        this.isUpdated=true;
      }
    }
  })
}
close(){
  this.clear()
  this.userData.getUserData().subscribe({
    next:(response)=>{
       this.data=response
    }
  })
}
  clear() {
    this.form = new FormGroup({
      firstName: new FormControl((document.getElementById("firstName") as HTMLElement).innerHTML),
      lastName: new FormControl((document.getElementById("lastName") as HTMLElement).innerHTML),
      email: new FormControl(null),
      phone: new FormControl((document.getElementById("phone") as HTMLElement).innerHTML),
      gender: new FormControl((document.getElementById("gender") as HTMLElement).innerHTML),
      address: new FormControl(null),
    });
  }
}
