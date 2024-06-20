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
 tryyy:any={
  "personalMedicalHistory": {
      "anemia": false,
      "arthritis": true,
      "asthma": true,
      "cancer": false,
      "chronicObstructive": false,
      "heartDisease": false,
      "clottingDisorder": false,
      "congestiveHeartFailure": false,
      "crohnsDisease": false,
      "depression": false,
      "diabetes": false,
      "emphysema": false,
      "endocrineProblems": false,
      "GERD": false,
      "glaucoma": false,
      "hepatitis": false,
      "HIV_AIDS": false,
      "hypertension": false,
      "kidneyDisease": false,
      "myocardialInfarction": false,
      "pepticUlcerDisease": false,
      "seizures": false,
      "stroke": false,
      "ulcerativeColitis": false
  },
  "personalSurgicalHistory": {
      "adrenalGlandSurgery": false,
      "arterySurgery": false,
      "prostateSurgery": false,
      "lungSurgery": false,
      "spineSurgery": false,
      "colonSurgery": false,
      "neckSurgery": false,
      "bladderSurgery": false,
      "smallIntestineSurgery": false,
      "uterusSurgery": false,
      "kidneySurgery": false,
      "thyroidSurgery": false,
      "largeIntestineSurgery": false,
      "breastSurgery": false,
      "cesareanSection": false,
      "appendectomy": false,
      "esophagusSurgery": false,
      "gastricBypassSurgery": false,
      "hemorrhoidSurgery": false,
      "stomachSurgery": false
  },
  "personalAllergiesHistory": {
      "foodAllergies": false,
      "drugAllergies": false,
      "dustAllergies": false,
      "petAllergies": false,
      "temperatureChanges": false,
      "seasonalAllergies": false,
      "pollutionAllergy": false,
      "moldAllergies": false
  },
  "familyMedicalHistory": {
      "cancer": false,
      "anemia": false,
      "highBloodPressure": false,
      "diabetes": false,
      "anesthesiaReaction": false,
      "bloodClots": false,
      "bleedingProblems": false,
      "heartDisease": false,
      "hepatitis": false,
      "stroke": false,
      "kidneyDisease": false,
      "endocrineProblems": false
  },
  "_id": "667414d76284c79f1e41c095",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "address": "123 Main St, Anytown, USA",
  "phone": "123-456-7890",
  "age": 30,
  "gender": "Male",
  "maritalStatus": "Single",
  "weight": 75,
  "height": 180,
  "bloodType": "O+",
  "emergencyContacts": [
      {
          "firstName": "Jane",
          "lastName": "Doe",
          "address": "456 Elm St, Anytown, USA",
          "phone": "987-654-3210",
          "_id": "667414d76284c79f1e41c096"
      },
      {
          "firstName": "Michael",
          "lastName": "Smith",
          "address": "789 Oak St, Anytown, USA",
          "phone": "555-555-5555",
          "_id": "667414d76284c79f1e41c097"
      }
  ],
  "__v": 0
}
  ngOnInit(): void {
    console.log(this.tryyy.firstName);
    this.userData.getUserData().subscribe({
      next:(response)=>{
          this.data=response
      }
    })
  }
  
}
