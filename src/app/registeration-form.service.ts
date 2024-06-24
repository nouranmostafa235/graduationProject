import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class RegisterationFormService {

  registerForm:FormGroup= new FormGroup({
    firstname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    rePassword:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    address:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    phone:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required]),
    gender:new FormControl(null,[Validators.required]),
    image:new FormControl(null,[Validators.required]),
    weight:new FormControl(null,[Validators.required]),
    height:new FormControl(null,[Validators.required]),
    bloodType:new FormControl(null,[Validators.required]),
    animia:new FormControl(null),
    Arthirits:new FormControl(null),
    Asthma:new FormControl(null),
    Cancer:new FormControl(null),
    ChronicObstructive:new FormControl(null),
    Disease:new FormControl(null),
    Clotting:new FormControl(null),
    Congestive:new FormControl(null),
    Crohns:new FormControl(null),
    Depression:new FormControl(null),
    Diabetes:new FormControl(null),
    Emphysema:new FormControl(null),
    Endocrine:new FormControl(null),
    GERD:new FormControl(null),
    Glaucoma:new FormControl(null),
    Hepatitis:new FormControl(null),
    HIV_AIDS:new FormControl(null),
    Hypertension:new FormControl(null),
    Kidney:new FormControl(null),
    Myocardial:new FormControl(null),
    Peptic:new FormControl(null),
    Seizures:new FormControl(null),
    Stroke:new FormControl(null),
    UIcerative:new FormControl(null),
    Adrenal:new FormControl(null),
    Colon:new FormControl(null),
    KidneySurgery:new FormControl(null),
    Appendectomy:new FormControl(null),
    ArterySurgery:new FormControl(null),
    NeckSurgery:new FormControl(null),
    ThyroidSurgery:new FormControl(null),
    Esophagus:new FormControl(null),
    Prostate:new FormControl(null),
    Bladder:new FormControl(null),
    LargeIntestineSurgery:new FormControl(null),
    GastricBypassSurgery:new FormControl(null),
    LungsSurgery:new FormControl(null),
    SmallIntestineSurgery:new FormControl(null),
    BreastSurgery:new FormControl(null),
    Hemorrhoid:new FormControl(null),
    Spine:new FormControl(null),
    Utrus:new FormControl(null),
    Cesarean:new FormControl(null),
    Stomach:new FormControl(null),
    FoodAllergies:new FormControl(null),
    DrugAllergies:new FormControl(null),
    DustAllergies:new FormControl(null),
    PetAllergies:new FormControl(null),
    TempretureChanges:new FormControl(null),
    SeasonalAllergies:new FormControl(null),
    PollutionAllergy:new FormControl(null),
    MoldAllergies:new FormControl(null),
    fm_Cancer:new FormControl(null),
    fm_Animia:new FormControl(null),
    fm_High_Blood:new FormControl(null),
    fm_Diabetes:new FormControl(null),
    fm_Anesthesia:new FormControl(null),
    fm_BloodClots:new FormControl(null),
    fm_Bleeding:new FormControl(null),
    fm_HeartDisease:new FormControl(null),
    fm_Hepatitis:new FormControl(null),
    fm_Stroke:new FormControl(null),
    fm_KidneyDisease:new FormControl(null),
    fm_Endocrine:new FormControl(null),
    firstname1:new FormControl(null),
    lastname1:new FormControl(null),
    phone1:new FormControl(null),
    address1:new FormControl(null),
    firstname2:new FormControl(null),
    lastname2:new FormControl(null),
    phone2:new FormControl(null),
    address2:new FormControl(null),
  })
  constructor() { }
}
