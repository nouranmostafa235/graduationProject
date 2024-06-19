import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements AfterViewInit{
name:any;
form:FormGroup=new FormGroup({ 
  firstName: new FormControl(null),
  lastName:new FormControl,
  email:new FormControl,
  phone:new FormControl,
  gender:new FormControl,
  address:new FormControl,
  
});
  ngAfterViewInit() {
     this.form=new FormGroup({
      firstName: new FormControl((document.getElementById("firstName") as HTMLElement).innerHTML),
      lastName: new FormControl((document.getElementById("lastName") as HTMLElement).innerHTML),
      email: new FormControl(null),
      phone: new FormControl((document.getElementById("phone") as HTMLElement).innerHTML),
      gender: new FormControl((document.getElementById("gender") as HTMLElement).innerHTML),
      address: new FormControl(null),
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
 
 clear(){
  this.form=new FormGroup({
    firstName: new FormControl((document.getElementById("firstName") as HTMLElement).innerHTML),
    lastName: new FormControl((document.getElementById("lastName") as HTMLElement).innerHTML),
    email: new FormControl(null),
    phone: new FormControl((document.getElementById("phone") as HTMLElement).innerHTML),
    gender: new FormControl((document.getElementById("gender") as HTMLElement).innerHTML),
    address: new FormControl(null),
   });  
 }
}
