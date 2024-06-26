import { Component } from '@angular/core';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
constructor(private signIn:SignInService){}
// logOut(){
//   this.signIn.logOut()
// }
}
