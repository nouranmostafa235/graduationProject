import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationFormService {
  registerForm:FormGroup=new FormGroup({})
  constructor(private fb: FormBuilder,private route:Router , private http:HttpClient){
     this.registerForm= this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      age: [''],
      gender: [''],
      address: [''],
      weight: [''],
      height: [''],
      bloodType: new FormControl(),
      password:[''],
      maritalStatus:[''],
      profileImage:[null],
      personalMedicalHistory:this.fb.group({
        anemia: [false],
        arthritis: [false],
        asthma: [false],
        cancer: [false],
        chronicObstructive: [false],
        heartDisease: [false],
        clottingDisorder: [false],
        congestiveHeartFailure: [false],
        crohnsDisease: [false],
        depression: [false],
        diabetes: [false],
        emphysema: [false],
        endocrineProblems: [false],
        GERD: [false],
        glaucoma: [false],
        hepatitis: [false],
        HIV_AIDS: [false],
        hypertension: [false],
        kidneyDisease: [false],
        myocardialInfarction: [false],
        pepticUlcerDisease: [false],
        seizures: [false],
        stroke: [false],
        ulcerativeColitis: [false]
      }),
      personalSurgicalHistory: this.fb.group({
        adrenalGlandSurgery:[false],
        colonSurgery:[false],
        kidneySurgery:[false],
        appendectomy:[false],
        arterySurgery:[false],
        neckSurgery:[false],
        thyroidSurgery:[false],
        esophagusSurgery:[false],
        prostateSurgery:[false],
        bladderSurgery:[false],
        largeIntestineSurgery:[false],
        gastricBypassSurgery:[false],
        lungSurgery:[false],
        smallIntestineSurgery:[false],
        breastSurgery:[false],
        hemorrhoidSurgery:[false],
        spineSurgery:[false],
        uterusSurgery:[false],
        cesareanSection:[false],
        stomachSurgery:[false],
      }),
      personalAllergiesHistory: this.fb.group({
        foodAllergies: [false],
        drugAllergies: [false],
        dustAllergies: [false],
        petAllergies: [false],
        temperatureChanges: [false],
        seasonalAllergies: [false],
        pollutionAllergy: [false],
        moldAllergies: [false],
      }),
      familyMedicalHistory: this.fb.group({
        cancer: [false],
        anemia: [false],
        highBloodPressure: [false],
        diabetes: [false],
        anesthesiaReaction: [false],
        bloodClots: [false],
        bleedingProblems: [false],
        heartDisease: [false],
        hepatitis: [false],
        stroke: [false],
        kidneyDisease: [false],
        endocrineProblems: [false],
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          address: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', Validators.required]
        }),
        this.fb.group({
          address: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', Validators.required]
        })
      ])
    })

  }
  imageFile:any

  handleFileChange(event: any) {
    const file = event.target.files[0];
     
    const filePath = URL.createObjectURL(file);
    this.imageFile=file
  console.log("fileee",filePath);
    // localStorage.setItem('uploadedImage', file);
  }
 handlrRegistration(userData:any):Observable<any>{
  
  return this.http.post<any>("http://localhost:3000/users/register",userData,{
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  })
 }

}
