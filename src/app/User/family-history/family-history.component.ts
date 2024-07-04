import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.css']
})


export class FamilyHistoryComponent implements OnInit {
  defaultImageUrl: string = 'assets/imgs/default_user.webp';
constructor(private userData:UserDataService){}
  data:any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next:(response)=>{
        this.data=response
      }
    })
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
} 
