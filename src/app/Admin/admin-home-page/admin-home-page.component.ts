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
  tryarr:any[]=[
    {
        "_id": "667578e936dda68e675c0de6",
        "name": "Sunshine Clinic",
        "about": "A clinic dedicated to providing the best healthcare services.",
        "branches": [
            {
                "name": "Main Branch",
                "address": "123 Health St, Wellness City",
                "phone": "123-456-7890",
                "_id": "667578e936dda68e675c0de7"
            },
            {
                "name": "East Branch",
                "address": "456 Care Ave, Healthy Town",
                "phone": "987-654-3210",
                "_id": "667578e936dda68e675c0de8"
            }
        ],
        "contactNumbers": [
            "123-456-7890",
            "098-765-4321"
        ],
        "socialMedia": [
            {
                "platform": "Facebook",
                "link": "http://facebook.com/sunshineclinic",
                "_id": "667578e936dda68e675c0de9"
            },
            {
                "platform": "Twitter",
                "link": "http://twitter.com/sunshineclinic",
                "_id": "667578e936dda68e675c0dea"
            }
        ],
        "createdAt": "2024-06-21T12:58:17.465Z",
        "__v": 0
    },
    {
      "_id": "667578de6",
      "name": "Sunsof",
      "about": "A clinic dkrfrplfroviding the best healthcare services.",
      "branches": [
          {
              "name": "Main Branch",
              "address": "123 Health St, Wellness City",
              "phone": "123-456-7890",
              "_id": "667578e936dda68e675c0de7"
          },
          {
              "name": "East Branch",
              "address": "456 Care Ave, Healthy Town",
              "phone": "987-654-3210",
              "_id": "667578e936dda68e675c0de8"
          }
      ],
      "contactNumbers": [
          "123-456-7890",
          "098-765-4321"
      ],
      "socialMedia": [
          {
              "platform": "Facebook",
              "link": "http://facebook.com/sunshineclinic",
              "_id": "667578e936dda68e675c0de9"
          },
          {
              "platform": "Twitter",
              "link": "http://twitter.com/sunshineclinic",
              "_id": "667578e936dda68e675c0dea"
          }
      ],
      "createdAt": "2024-06-21T12:58:17.465Z",
      "__v": 0
  }
]

}
