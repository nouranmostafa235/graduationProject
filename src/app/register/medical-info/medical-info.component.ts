import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationFormService } from 'src/app/registeration-form.service';
@Component({
  selector: 'app-medical-info',
  templateUrl: './medical-info.component.html',
  styleUrls: ['./medical-info.component.css']
})
export class MedicalInfoComponent {

  constructor(private _regForm: RegisterationFormService , private route:Router) { }
  weight = ''
  height = ''
  bloodType = ''
  personalMedicalHistory = {
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
  };
  personalSurgicalHistory = {
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
  };
  personalAllergiesHistory = {
    foodAllergies: false,
    drugAllergies: false,
    dustAllergies: false,
    petAllergies: false,
    temperatureChanges: false,
    seasonalAllergies: false,
    pollutionAllergy: false,
    moldAllergies: false,
  };
  familyMedicalHistory={
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
  }
  saveData(){
    this._regForm.setFormData({
      weight: this.weight,
      height: this.height,
      bloodType: this.bloodType,
      personalMedicalHistory: this.personalMedicalHistory,
      personalSurgicalHistory: this.personalSurgicalHistory,
      personalAllergiesHistory: this.personalAllergiesHistory,
      familyMedicalHistory:this.familyMedicalHistory
    })
    this.route.navigate(['/emergency_Contact'])
  }
}
