import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit , AfterViewInit {
 
  constructor(private userData:UserDataService ,private router:Router){}
  data:any
  
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    gender: new FormControl,
    address: new FormControl,
    weight: new FormControl,
    height: new FormControl,
    bloodType: new FormControl,

  });
 
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next:(response)=>{
        this.data=response
      }
    })
  }
  ngAfterViewInit() {
    this.form = new FormGroup({
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      phone: new FormControl(this.data.phone),
      gender: new FormControl(this.data.gender),
      address: new FormControl(this.data.address),
      weight: new FormControl(this.data.weight),
      height: new FormControl(this.data.height),
      bloodType: new FormControl(this.data.bloodType),
      animia:new FormControl(this.data.personalMedicalHistory.anemia),
      arthirits:new FormControl(this.data.personalMedicalHistory.arthirits),
      asthma:new FormControl(this.data.personalMedicalHistory.asthma),
      cancer:new FormControl(this.data.personalMedicalHistory.cancer),
      chronicObstructive:new FormControl(this.data.personalMedicalHistory.chronicObstructive),
      heartDisease:new FormControl(this.data.personalMedicalHistory.heartDisease),
      clottingDisorder:new FormControl(this.data.personalMedicalHistory.clottingDisorder),
      congestiveHeartFailure:new FormControl(this.data.personalMedicalHistory.congestiveHeartFailure),
      crohnsDisease:new FormControl(this.data.personalMedicalHistory.crohnsDisease),
      depression:new FormControl(this.data.personalMedicalHistory.depression),
      diabetes:new FormControl(this.data.personalMedicalHistory.diabetes),
      emphysema:new FormControl(this.data.personalMedicalHistory.emphysema),
      endocrine:new FormControl(this.data.personalMedicalHistory.endocrineProblems),
      GERD:new FormControl(this.data.personalMedicalHistory.GERD),
      glaucoma:new FormControl(this.data.personalMedicalHistory.glaucoma),
      hepatitis:new FormControl(this.data.personalMedicalHistory.hepatitis),
      HIV_AIDS:new FormControl(this.data.personalMedicalHistory.HIV_AIDS),
      hypertension:new FormControl(this.data.personalMedicalHistory.hypertension),
      kidneyDiseas:new FormControl(this.data.personalMedicalHistory.kidneyDiseas),
      myocardialInfarction:new FormControl(this.data.personalMedicalHistory.myocardialInfarction),
      pepticUlcerDisease:new FormControl(this.data.personalMedicalHistory.pepticUlcerDisease),
      seizures:new FormControl(this.data.personalMedicalHistory.seizures),
      stroke:new FormControl(this.data.personalMedicalHistory.stroke),
      ulcerativeColitis:new FormControl(this.data.personalMedicalHistory.ulcerativeColitis),

      adrenal:new FormControl(null),
      colon:new FormControl(null),
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
    });

    // const table = document.getElementById('modalTable');
    // const tdElements = table?.querySelectorAll('td');
    // tdElements?.forEach(td => {
    //   const iElement = td.querySelector('i.fa-check');
    //   if (iElement) {
    //     const checkbox = document.createElement('input');
    //     checkbox.type = 'checkbox';
    //     checkbox.checked = true;
    //     td.replaceChild(checkbox, iElement);
    //   } else {
    //     const labelElement = td.querySelector('label');
    //     if (labelElement) {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.insertBefore(checkbox, labelElement);
    //     } else {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.appendChild(checkbox);
    //     }
    //   }
    // });


    // const table2 = document.getElementById('modalTable2');
    // const tdElements2 = table2?.querySelectorAll('td');
    // tdElements2?.forEach(td => {
    //   const iElement = td.querySelector('i.fa-check');
    //   if (iElement) {
    //     const checkbox = document.createElement('input');
    //     checkbox.type = 'checkbox';
    //     checkbox.checked = true;
    //     td.replaceChild(checkbox, iElement);
    //   } else {
    //     const labelElement = td.querySelector('label');
    //     if (labelElement) {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.insertBefore(checkbox, labelElement);
    //     } else {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.appendChild(checkbox);
    //     }
    //   }
    // });
    // const table3 = document.getElementById('modalTable3');
    // const tdElements3 = table3?.querySelectorAll('td');
    // tdElements3?.forEach(td => {
    //   const iElement = td.querySelector('i.fa-check');
    //   if (iElement) {
    //     const checkbox = document.createElement('input');
    //     checkbox.type = 'checkbox';
    //     checkbox.checked = true;
    //     td.replaceChild(checkbox, iElement);
    //   } else {
    //     const labelElement = td.querySelector('label');
    //     if (labelElement) {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.insertBefore(checkbox, labelElement);
    //     } else {
    //       const checkbox = document.createElement('input');
    //       checkbox.type = 'checkbox';
    //       td.appendChild(checkbox);
    //     }
    //   }
    // });
  //   const table4 = document.getElementById('modalTable4');
  //   const tdElements4 = table4?.querySelectorAll('td');
  //   tdElements4?.forEach(td => {
  //     const iElement = td.querySelector('i.fa-check');
  //     if (iElement) {
  //       const checkbox = document.createElement('input');
  //       checkbox.type = 'checkbox';
  //       checkbox.checked = true;
  //       td.replaceChild(checkbox, iElement);
  //     } else {
  //       const labelElement = td.querySelector('label');
  //       if (labelElement) {
  //         const checkbox = document.createElement('input');
  //         checkbox.type = 'checkbox';
  //         td.insertBefore(checkbox, labelElement);
  //       } else {
  //         const checkbox = document.createElement('input');
  //         checkbox.type = 'checkbox';
  //         td.appendChild(checkbox);
  //       }
  //     }
  //   });
 }

isUpdated:boolean=false
updateInfo(form:FormGroup){
  this.userData.updateInfo(form.value).subscribe({
    next:(response)=>{
      if(response.message==="updated successfully"){
        this.isUpdated=true;
        this.router.navigate(['/updateInfo'])
      }
    }
  })
}
close(){
  this.router.navigate(['/updateInfo'])
  this.form = new FormGroup({
    firstName: new FormControl((document.getElementById("firstName") as HTMLElement).innerHTML),
    lastName: new FormControl((document.getElementById("lastName") as HTMLElement).innerHTML),
    email: new FormControl((document.getElementById("email") as HTMLElement).innerHTML),
    phone: new FormControl((document.getElementById("phone") as HTMLElement).innerHTML),
    gender: new FormControl((document.getElementById("gender") as HTMLElement).innerHTML),
    address: new FormControl((document.getElementById("address") as HTMLElement).innerHTML),
  });
}
}
