import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
   persolHistroyForm:FormGroup=new FormGroup({});
  form: FormGroup = new FormGroup({});
 
  constructor(private userData: UserDataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      age: [''],
      gender: [''],
      address: [''],
      weight: [''],
      height: [''],
      bloodType: [''],
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

    })


  }

  data: any = {}
  first: any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response
        this.form.patchValue({
          firstName: this.data.firstName,
          lastName: this.data.lastName,
          email: this.data.email,
          phone: this.data.phone,
          age: this.data.age,
          gender: this.data.gender,
          address: this.data.address,
          weight: this.data.weight,
          height: this.data.height,
          bloodType: this.data.bloodType,
          personalMedicalHistory: {
            anemia: this.data.personalMedicalHistory?.anemia ?? false,
            arthritis: this.data.personalMedicalHistory?.arthirits??false,
            asthma: this.data.personalMedicalHistory?.asthma??false,
            cancer: this.data.personalMedicalHistory?.cancer??false,
            chronicObstructive: this.data.personalMedicalHistory?.chronicObstructive??false,
            heartDisease: this.data.personalMedicalHistory?.heartDisease??false,
            clottingDisorder: this.data.personalMedicalHistory?.clottingDisorder??false,
            congestiveHeartFailure: this.data.personalMedicalHistory?.congestiveHeartFailure??false,
            crohnsDisease: this.data.personalMedicalHistory?.crohnsDisease??false,
            depression: this.data.personalMedicalHistory?.depression??false,
            diabetes: this.data.personalMedicalHistory?.diabetes??false,
            emphysema: this.data.personalMedicalHistory?.emphysema??false,
            endocrineProblems: this.data.personalMedicalHistory?.endocrineProblems??false,
            GERD: this.data.personalMedicalHistory?.GERD??false,
            glaucoma: this.data.personalMedicalHistory?.glaucoma??false,
            hepatitis: this.data.personalMedicalHistory?.hepatitis??false,
            HIV_AIDS: this.data.personalMedicalHistory?.HIV_AIDS??false,
            hypertension: this.data.personalMedicalHistory?.hypertension??false,
            kidneyDisease: this.data.personalMedicalHistory?.kidneyDisease??false,
            myocardialInfarction: this.data.personalMedicalHistory?.myocardialInfarction??false,
            pepticUlcerDisease: this.data.personalMedicalHistory?.pepticUlcerDisease??false,
            seizures: this.data.personalMedicalHistory?.seizures??false,
            stroke: this.data.personalMedicalHistory?.stroke??false,
            ulcerativeColitis: this.data.personalMedicalHistory?.ulcerativeColitis??false,
          },
          personalSurgicalHistory:{
            adrenalGlandSurgery:this.data.personalSurgicalHistory?.adrenalGlandSurgery??false,
            colonSurgery:this.data.personalSurgicalHistory?.colonSurgery??false,
            kidneySurgery:this.data.personalSurgicalHistory?.kidneySurgery??false,
            appendectomy:this.data.personalSurgicalHistory?.appendectomy??false,
            arterySurgery:this.data.personalSurgicalHistory?.arterySurgery??false,
            neckSurgery:this.data.personalSurgicalHistory?.neckSurgery??false,
            thyroidSurgery:this.data.personalSurgicalHistory?.thyroidSurgery??false,
            esophagusSurgery:this.data.personalSurgicalHistory?.esophagusSurgery??false,
            prostateSurgery:this.data.personalSurgicalHistory?.prostateSurgery??false,
            bladderSurgery:this.data.personalSurgicalHistory?.bladderSurgery??false,
            largeIntestineSurgery:this.data.personalSurgicalHistory?.largeIntestineSurgery??false,
            gastricBypassSurgery:this.data.personalSurgicalHistory?.gastricBypassSurgery??false,
            lungSurgery:this.data.personalSurgicalHistory?.lungSurgery??false,
            smallIntestineSurgery:this.data.personalSurgicalHistory?.smallIntestineSurgery??false,
            breastSurgery:this.data.personalSurgicalHistory?.breastSurgery??false,
            hemorrhoidSurgery:this.data.personalSurgicalHistory?.hemorrhoidSurgery??false,
            spineSurgery:this.data.personalSurgicalHistory?.spineSurgery??false,
            uterusSurgery:this.data.personalSurgicalHistory?.uterusSurgery??false,
            cesareanSection:this.data.personalSurgicalHistory?.cesareanSection??false,
            stomachSurgery:this.data.personalSurgicalHistory?.stomachSurgery??false,
          }
        })

      }
    })
  }

  //   ngAfterViewInit() {
  //     this.form = new FormGroup({
  //       anemia:new FormControl(this.data.personalMedicalHistory.anemia),
  //       arthritis:new FormControl(this.data.personalMedicalHistory.arthirits),
  //       asthma:new FormControl(this.data.personalMedicalHistory.asthma),
  //       cancer:new FormControl(this.data.personalMedicalHistory.cancer),
  //       chronicObstructive:new FormControl(this.data.personalMedicalHistory.chronicObstructive),
  //       heartDisease:new FormControl(this.data.personalMedicalHistory.heartDisease),
  //       clottingDisorder:new FormControl(this.data.personalMedicalHistory.clottingDisorder),
  //       congestiveHeartFailure:new FormControl(this.data.personalMedicalHistory.congestiveHeartFailure),
  //       crohnsDisease:new FormControl(this.data.personalMedicalHistory.crohnsDisease),
  //       depression:new FormControl(this.data.personalMedicalHistory.depression),
  //       diabetes:new FormControl(this.data.personalMedicalHistory.diabetes),
  //       emphysema:new FormControl(this.data.personalMedicalHistory.emphysema),
  //       endocrineProblems:new FormControl(this.data.personalMedicalHistory.endocrineProblems),
  //       GERD:new FormControl(this.data.personalMedicalHistory.GERD),
  //       glaucoma:new FormControl(this.data.personalMedicalHistory.glaucoma),
  //       hepatitis:new FormControl(this.data.personalMedicalHistory.hepatitis),
  //       HIV_AIDS:new FormControl(this.data.personalMedicalHistory.HIV_AIDS),
  //       hypertension:new FormControl(this.data.personalMedicalHistory.hypertension),
  //       kidneyDiseas:new FormControl(this.data.personalMedicalHistory.kidneyDiseas),
  //       myocardialInfarction:new FormControl(this.data.personalMedicalHistory.myocardialInfarction),
  //       pepticUlcerDisease:new FormControl(this.data.personalMedicalHistory.pepticUlcerDisease),
  //       seizures:new FormControl(this.data.personalMedicalHistory.seizures),
  //       stroke:new FormControl(this.data.personalMedicalHistory.stroke),
  //       ulcerativeColitis:new FormControl(this.data.personalMedicalHistory.ulcerativeColitis),

  //       adrenal:new FormControl(null),
  //       colon:new FormControl(null),
  //       KidneySurgery:new FormControl(null),
  //       Appendectomy:new FormControl(null),
  //       ArterySurgery:new FormControl(null),
  //       NeckSurgery:new FormControl(null),
  //       ThyroidSurgery:new FormControl(null),
  //       Esophagus:new FormControl(null),
  //       Prostate:new FormControl(null),
  //       Bladder:new FormControl(null),
  //       LargeIntestineSurgery:new FormControl(null),
  //       GastricBypassSurgery:new FormControl(null),
  //       LungsSurgery:new FormControl(null),
  //       SmallIntestineSurgery:new FormControl(null),
  //       BreastSurgery:new FormControl(null),
  //       Hemorrhoid:new FormControl(null),
  //       Spine:new FormControl(null),
  //       Utrus:new FormControl(null),
  //       Cesarean:new FormControl(null),
  //       Stomach:new FormControl(null),


  //       FoodAllergies:new FormControl(null),
  //       DrugAllergies:new FormControl(null),
  //       DustAllergies:new FormControl(null),
  //       PetAllergies:new FormControl(null),
  //       TempretureChanges:new FormControl(null),
  //       SeasonalAllergies:new FormControl(null),
  //       PollutionAllergy:new FormControl(null),
  //       MoldAllergies:new FormControl(null),


  //       fm_Cancer:new FormControl(null),
  //       fm_Animia:new FormControl(null),
  //       fm_High_Blood:new FormControl(null),
  //       fm_Diabetes:new FormControl(null),
  //       fm_Anesthesia:new FormControl(null),
  //       fm_BloodClots:new FormControl(null),
  //       fm_Bleeding:new FormControl(null),
  //       fm_HeartDisease:new FormControl(null),
  //       fm_Hepatitis:new FormControl(null),
  //       fm_Stroke:new FormControl(null),
  //       fm_KidneyDisease:new FormControl(null),
  //       fm_Endocrine:new FormControl(null),
  //     });

  //     // const table = document.getElementById('modalTable');
  //     // const tdElements = table?.querySelectorAll('td');
  //     // tdElements?.forEach(td => {
  //     //   const iElement = td.querySelector('i.fa-check');
  //     //   if (iElement) {
  //     //     const checkbox = document.createElement('input');
  //     //     checkbox.type = 'checkbox';
  //     //     checkbox.checked = true;
  //     //     td.replaceChild(checkbox, iElement);
  //     //   } else {
  //     //     const labelElement = td.querySelector('label');
  //     //     if (labelElement) {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.insertBefore(checkbox, labelElement);
  //     //     } else {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.appendChild(checkbox);
  //     //     }
  //     //   }
  //     // });


  //     // const table2 = document.getElementById('modalTable2');
  //     // const tdElements2 = table2?.querySelectorAll('td');
  //     // tdElements2?.forEach(td => {
  //     //   const iElement = td.querySelector('i.fa-check');
  //     //   if (iElement) {
  //     //     const checkbox = document.createElement('input');
  //     //     checkbox.type = 'checkbox';
  //     //     checkbox.checked = true;
  //     //     td.replaceChild(checkbox, iElement);
  //     //   } else {
  //     //     const labelElement = td.querySelector('label');
  //     //     if (labelElement) {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.insertBefore(checkbox, labelElement);
  //     //     } else {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.appendChild(checkbox);
  //     //     }
  //     //   }
  //     // });
  //     // const table3 = document.getElementById('modalTable3');
  //     // const tdElements3 = table3?.querySelectorAll('td');
  //     // tdElements3?.forEach(td => {
  //     //   const iElement = td.querySelector('i.fa-check');
  //     //   if (iElement) {
  //     //     const checkbox = document.createElement('input');
  //     //     checkbox.type = 'checkbox';
  //     //     checkbox.checked = true;
  //     //     td.replaceChild(checkbox, iElement);
  //     //   } else {
  //     //     const labelElement = td.querySelector('label');
  //     //     if (labelElement) {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.insertBefore(checkbox, labelElement);
  //     //     } else {
  //     //       const checkbox = document.createElement('input');
  //     //       checkbox.type = 'checkbox';
  //     //       td.appendChild(checkbox);
  //     //     }
  //     //   }
  //     // });
  //   //   const table4 = document.getElementById('modalTable4');
  //   //   const tdElements4 = table4?.querySelectorAll('td');
  //   //   tdElements4?.forEach(td => {
  //   //     const iElement = td.querySelector('i.fa-check');
  //   //     if (iElement) {
  //   //       const checkbox = document.createElement('input');
  //   //       checkbox.type = 'checkbox';
  //   //       checkbox.checked = true;
  //   //       td.replaceChild(checkbox, iElement);
  //   //     } else {
  //   //       const labelElement = td.querySelector('label');
  //   //       if (labelElement) {
  //   //         const checkbox = document.createElement('input');
  //   //         checkbox.type = 'checkbox';
  //   //         td.insertBefore(checkbox, labelElement);
  //   //       } else {
  //   //         const checkbox = document.createElement('input');
  //   //         checkbox.type = 'checkbox';
  //   //         td.appendChild(checkbox);
  //   //       }
  //   //     }
  //   //   });
  //  }

  isUpdated: boolean = false
  updateInfo(form: FormGroup) {
    console.log(form.value);
    
    this.userData.updateInfo(form.value).subscribe({
      next: (response) => {
        if (response.message === "updated successfully") {
          this.isUpdated = true;
          this.ngOnInit()
        }
      }
    })
  }
  close() {

  }
}
