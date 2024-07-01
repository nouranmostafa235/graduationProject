import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
@Component({
  selector: 'app-view-user-in-lab',
  templateUrl: './view-user-in-lab.component.html',
  styleUrls: ['./view-user-in-lab.component.css']
})
export class ViewUserInLabComponent implements OnInit{
  constructor(private service: InstitutionsService , private route:Router) { }
  allusers:any
  searchVal=''
  selectedUserId: string = ''
  labId:string=''
  labInfo:any
  ngOnInit(): void {
    this.service.getallUsers().subscribe({
      next:(response)=>{
        this.allusers=response
      }
    })
    this.service.getLabByToken().subscribe({
      next:(response)=>{
        this.labId=response.lab._id
      }
    })
  }
  setSelectedUser(userId: string) {
    this.selectedUserId = userId;
   this.route.navigate(['/lab/userProfile'],{ queryParams: { id: userId } })
  }

}
