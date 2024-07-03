import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
@Component({
  selector: 'app-view-by-search-inclinic',
  templateUrl: './view-by-search-inclinic.component.html',
  styleUrls: ['./view-by-search-inclinic.component.css']
})
export class ViewBySearchINClinicComponent implements OnInit{
  constructor(private service: InstitutionsService , private route:Router) { }
  allusers:any
  searchVal=''
  selectedUserId: string = ''
 clinicId:string=''
 clinicInfo:any
 ngOnInit(): void {
  this.service.getallUsers().subscribe({
    next:(response)=>{
      this.allusers=response
    }
  })
  this.service.getClinicByToken().subscribe({
    next:(response)=>{
      this.clinicId=response.clinic._id
    }
  })
}
setSelectedUser(userId: string) {
  this.selectedUserId = userId;
this.route.navigate(['/clinic/viewUser'], { queryParams: { id: userId } })
}
}
