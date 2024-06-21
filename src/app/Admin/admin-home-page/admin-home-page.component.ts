import { Component } from '@angular/core';
import { SignInService } from 'src/app/sign-in.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {
  constructor(private signIn:SignInService){}
  logOut(){
    this.signIn.adminLogOut()
  }
}
