import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';

@Component({
  selector: 'app-lab-navbar',
  templateUrl: './lab-navbar.component.html',
  styleUrls: ['./lab-navbar.component.css']
})
export class LabNavbarComponent implements OnInit{
  constructor(private service:InstitutionsService , private route:Router){}
  labInfo:any
ngOnInit(): void {
  this.service.getLabByToken().subscribe({
    next:(response)=>{
      this.labInfo=response.lab      
    }
  })
}
logout(){
  this.service.logOutLab().subscribe({
    next:(response)=>{
       localStorage.removeItem("labTokin")
       this.route.navigate(['/labLogin'])
    }
  })
 
}
}
