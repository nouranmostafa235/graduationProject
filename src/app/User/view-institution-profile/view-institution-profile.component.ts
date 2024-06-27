import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-institution-profile',
  templateUrl: './view-institution-profile.component.html',
  styleUrls: ['./view-institution-profile.component.css']
})
export class ViewInstitutionProfileComponent implements OnInit {
  constructor(private userData:UserDataService ,private route:ActivatedRoute){}
  id:any
  Info:any
  rate:any=4.5
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.id=params['id']
    })
   this.userData.getLabById(this.id).subscribe({
    next:(response)=>{
      this.Info=response
      console.log(this.Info);
    }
   })
    
  }

}
