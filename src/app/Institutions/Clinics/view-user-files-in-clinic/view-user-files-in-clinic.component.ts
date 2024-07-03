import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-view-user-files-in-clinic',
  templateUrl: './view-user-files-in-clinic.component.html',
  styleUrls: ['./view-user-files-in-clinic.component.css']
})
export class ViewUserFilesInClinicComponent implements OnInit{
  userId:any
  data:any
  clinicsIDs:any[]=[{}]
  clinics:any[]=[]
  constructor(private service:InstitutionsService, private route:ActivatedRoute ,private router:Router , private userData:UserDataService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['id']
    })
     this.service.getUserByIdClinic(this.userId).subscribe({
      next:(response)=>{
        this.data=response.user
        console.log(this.data);
        this.clinicsIDs=this.data.diagnosis
        for(let i=0 ;i<this.clinicsIDs.length;i++){
          this.userData.getClinicById(this.clinicsIDs[i].clinic).subscribe({
            next:(response)=>{
              this.clinics.push(response)        
            }
          })
          
        }
      }
     })
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
