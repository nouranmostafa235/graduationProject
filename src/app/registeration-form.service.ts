import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationFormService {
  constructor(private http:HttpClient){}
  private formData: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    weight: '',
    height: '',
    bloodType: '',
    password: '',
    maritalStatus: '',
    profile_images: null,
    personalMedicalHistory: {
      anemia: false,
      arthritis: false,
      asthma: false,
      cancer: false,
      chronicObstructive: false,
      heartDisease: false,
      clottingDisorder: false,
      congestiveHeartFailure: false,
      crohnsDisease: false,
      depression: false,
      diabetes: false,
      emphysema: false,
      endocrineProblems: false,
      GERD: false,
      glaucoma: false,
      hepatitis: false,
      HIV_AIDS: false,
      hypertension: false,
      kidneyDisease: false,
      myocardialInfarction: false,
      pepticUlcerDisease: false,
      seizures: false,
      stroke: false,
      ulcerativeColitis: false
    },
    personalSurgicalHistory: {
      adrenalGlandSurgery: false,
      colonSurgery: false,
      kidneySurgery: false,
      appendectomy: false,
      arterySurgery: false,
      neckSurgery: false,
      thyroidSurgery: false,
      esophagusSurgery: false,
      prostateSurgery: false,
      bladderSurgery: false,
      largeIntestineSurgery: false,
      gastricBypassSurgery: false,
      lungSurgery: false,
      smallIntestineSurgery: false,
      breastSurgery: false,
      hemorrhoidSurgery: false,
      spineSurgery: false,
      uterusSurgery: false,
      cesareanSection: false,
      stomachSurgery: false,
    },
    personalAllergiesHistory: {
      foodAllergies: false,
      drugAllergies: false,
      dustAllergies: false,
      petAllergies: false,
      temperatureChanges: false,
      seasonalAllergies: false,
      pollutionAllergy: false,
      moldAllergies: false,
    },
    familyMedicalHistory: {
      cancer: false,
      anemia: false,
      highBloodPressure: false,
      diabetes: false,
      anesthesiaReaction: false,
      bloodClots: false,
      bleedingProblems: false,
      heartDisease: false,
      hepatitis: false,
      stroke: false,
      kidneyDisease: false,
      endocrineProblems: false,

    },
    emergencyContacts: [{
      address: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    {
      address: '',
      firstName: '',
      lastName: '',
      phone: ''
    }
    ]
  }
  setFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }
  getFormData() {
    return this.formData;
  }
  clearFormData() {
    this.formData = {};
  }
  setFile(file: File | null) {
    if (file) {
      this.formData.profile_images = file;
    }
  }
  addToArray(item: any) {
    this.formData.emergencyContacts.push(item);
  }
  removeFromArray(index: number) {
    this.formData.emergencyContacts.splice(index, 1);
  }
  handleRegister(userData:any):Observable<any>{
      return this.http.post<any>("https://rabid-rx-back-end.vercel.app/users/register",userData)
  }

}
