import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { InstitutionsService } from 'src/app/institutions.service';

@Component({
  selector: 'app-clinic-nav-bar',
  templateUrl: './clinic-nav-bar.component.html',
  styleUrls: ['./clinic-nav-bar.component.css']
})
export class ClinicNavBarComponent implements OnInit{
 constructor(private service:InstitutionsService){
 }
 clinicInfo:any
 ngOnInit(): void {
   this.service.getClinicByToken().subscribe({
    next:(response)=>{
     this.clinicInfo=response.clinic
    }
   })
 }
 logOut(){
  localStorage.removeItem("clinicTokin")
 }
}
