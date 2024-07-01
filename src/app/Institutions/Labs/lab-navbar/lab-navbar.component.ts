import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';

@Component({
  selector: 'app-lab-navbar',
  templateUrl: './lab-navbar.component.html',
  styleUrls: ['./lab-navbar.component.css']
})
export class LabNavbarComponent implements OnInit{
  constructor(private service:InstitutionsService){}
  labInfo:any
ngOnInit(): void {
  this.service.getLabByToken().subscribe({
    next:(response)=>{
      this.labInfo=response.lab      
    }
  })
}
}
