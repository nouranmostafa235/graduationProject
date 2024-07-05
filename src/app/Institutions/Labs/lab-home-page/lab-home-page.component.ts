import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { InstitutionsService } from 'src/app/institutions.service';

@Component({
  selector: 'app-lab-home-page',
  templateUrl: './lab-home-page.component.html',
  styleUrls: ['./lab-home-page.component.css']
})
export class LabHomePageComponent implements OnInit{
  constructor(private instService:InstitutionsService){}
  labInfo:any
  rate:any
ngOnInit(): void {
  this.instService.getLabByToken().subscribe({
    next:(response)=>{
      this.labInfo=response.lab
      this.rate=this.labInfo.rate
      console.log(this.labInfo,"laaabb");
      
    }
  })
}
}
