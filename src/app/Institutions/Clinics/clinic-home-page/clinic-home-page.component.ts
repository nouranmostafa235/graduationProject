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
 rate:any
ngOnInit(): void {
  this.instService.getClinicByToken().subscribe({
    next:(response)=>{
      this.clinicInfo=response.clinic
      this.rate=this.clinicInfo.rate
       console.log(this.clinicInfo);
    }
  })
}
}
