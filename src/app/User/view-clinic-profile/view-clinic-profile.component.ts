import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-view-clinic-profile',
  templateUrl: './view-clinic-profile.component.html',
  styleUrls: ['./view-clinic-profile.component.css']
})
export class ViewClinicProfileComponent implements OnInit {
  constructor(private userData:UserDataService ,private route:ActivatedRoute){}
  id:any
  Info:any
  rate:any
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.id=params['id']
    })
   this.userData.getClinicById(this.id).subscribe({
    next:(response)=>{
      this.Info=response
      this.rate=response.rate
    }
   })
    
  }
}
