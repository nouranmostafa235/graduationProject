import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit{
  constructor(private userData: UserDataService, private router: Router) { }
  data: any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response
      }
    })
  }
}
