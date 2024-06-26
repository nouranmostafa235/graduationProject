import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  constructor(private userData:UserDataService , private router:Router){}
 data:any
 notificationNum:any
  ngOnInit(): void {
       
    this.userData.pending().subscribe({
      next:(response)=>{
        console.log(response);
        
        this.notificationNum=response.numberOfPendingNotification
      }
    })
    this.userData.getUserData().subscribe({
      next:(response)=>{
          this.data=response
          console.log(response);
          
      }
    })

    
  }
  logOut(){
    this.userData.logOut().subscribe({
      next:(response)=>{
        this.router.navigate(['/login'])
      }
    })
  }
 

  
}
