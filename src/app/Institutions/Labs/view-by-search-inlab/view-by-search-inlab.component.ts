import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
@Component({
  selector: 'app-view-by-search-inlab',
  templateUrl: './view-by-search-inlab.component.html',
  styleUrls: ['./view-by-search-inlab.component.css']
})
export class ViewBySearchInlabComponent  implements OnInit{
  constructor(private service: InstitutionsService , private route:Router) { }
  allusers:any
  searchVal=''
  selectedUserId: string = ''
 labId:string=''

 ngOnInit(): void {
  this.service.getallUsers().subscribe({
    next:(response)=>{
      this.allusers=response
    }
  })
  this.service.getLabByToken().subscribe({
    next:(response)=>{
      this.labId=response.clinic._id
    }
  })
}
setSelectedUser(userId: string) {
  this.selectedUserId = userId;
this.route.navigate(['/lab/viewUser'], { queryParams: { id: userId } })
}
}
