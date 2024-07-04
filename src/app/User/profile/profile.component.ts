import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  constructor(private userData: UserDataService) { }
  data: any
  url:any
  qrCodeDownloadLink: SafeValue = ''
  defaultImageUrl: string = 'assets/imgs/default_user.webp';
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response
        console.log(response, "userrr");
        this.url=`http://localhost:4200/user?id=${this.data._id}`
      }
    })
  }
  onChange(url: any) {
    this.qrCodeDownloadLink = url
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
}
