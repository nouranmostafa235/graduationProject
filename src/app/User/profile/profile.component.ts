import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  constructor(private userData:UserDataService){}
 data:any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next:(response)=>{
          this.data=response
      }
    })
  }
  
}
