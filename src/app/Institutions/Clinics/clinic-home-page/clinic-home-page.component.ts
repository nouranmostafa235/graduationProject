import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';
@Component({
  selector: 'app-clinic-home-page',
  templateUrl: './clinic-home-page.component.html',
  styleUrls: ['./clinic-home-page.component.css']
})
export class ClinicHomePageComponent implements OnInit{
  constructor(private instService:InstitutionsService){}
 clinicInfo:any
 rate:any=4.5
ngOnInit(): void {
  this.instService.getClinicByToken().subscribe({
    next:(response)=>{
      this.clinicInfo=response.clinic
       console.log(this.clinicInfo);
    }
  })
}
}
