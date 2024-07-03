import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  selectedFile: File | null = null;
  form: FormGroup = new FormGroup({});
  defaultImageUrl: string = 'assets/imgs/default_user.webp'; 
  constructor(private userData: UserDataService, private fb: FormBuilder,private route:Router) {
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
    })


  }

  data: any = {}
  first: any
  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response   
        console.log(this.data);
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
            arthritis: this.data.personalMedicalHistory?.arthritis??false,
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
          },
          personalAllergiesHistory:{
            foodAllergies:this.data.personalAllergiesHistory?.foodAllergies??false,
            drugAllergies:this.data.personalAllergiesHistory?.drugAllergies??false,
            dustAllergies:this.data.personalAllergiesHistory?.dustAllergies??false,
            petAllergies: this.data.personalAllergiesHistory?.petAllergies?? false,
            temperatureChanges:this.data.personalAllergiesHistory?.temperatureChanges??false,
            seasonalAllergies:this.data.personalAllergiesHistory?.seasonalAllergies??false,
            pollutionAllergy:this.data.personalAllergiesHistory?.pollutionAllergy??false,
            moldAllergies:this.data.personalAllergiesHistory?.moldAllergies??false,
          },
          familyMedicalHistory:{
            cancer: this.data.familyMedicalHistory?.cancer??false,
            anemia: this.data.familyMedicalHistory?.anemia??false,
            highBloodPressure: this.data.familyMedicalHistory?.highBloodPressure??false,
            diabetes: this.data.familyMedicalHistory?.diabetes??false,
            anesthesiaReaction: this.data.familyMedicalHistory?.anesthesiaReaction??false,
            bloodClots: this.data.familyMedicalHistory?.bloodClots??false,
            bleedingProblems: this.data.familyMedicalHistory?.bleedingProblems??false,
            heartDisease: this.data.familyMedicalHistory?.heartDisease??false,
            hepatitis: this.data.familyMedicalHistory?.hepatitis??false,
            stroke: this.data.familyMedicalHistory?.stroke??false,
            kidneyDisease: this.data.familyMedicalHistory?.kidneyDisease??false,
            endocrineProblems: this.data.familyMedicalHistory?.endocrineProblems??false,
          },
          emergencyContacts:[{
            address:this.data.emergencyContacts[0].address,
            firstName:this.data.emergencyContacts[0].firstName,
            lastName:this.data.emergencyContacts[0].lastName,
            phone:this.data.emergencyContacts[0].phone

          },
          {
            address:this.data.emergencyContacts[1].address,
            lastName:this.data.emergencyContacts[1].lastName,
            firstName:this.data.emergencyContacts[1].firstName,
            phone:this.data.emergencyContacts[1].phone
          }
        ]
          
        })

      }
    })
    
  }
  isUpdated: boolean = false
  updateInfo(form: FormGroup) {
    console.log(form.value);
    
    this.userData.updateInfo(form.value).subscribe({
      next: (response) => {
        if (response.message === "updated successfully") {
          this.ngOnInit()
        }
      }
    })
  }
  reload(){
    location.reload()
  }
  save(form:FormGroup){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.updateInfo(form)
        Swal.fire("Saved!", "", "success").then(() => {
          this.reload();
        });;
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log(file);
      this.uploadImage();
    }
  }
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('profileImage', this.selectedFile, this.selectedFile.name);
      this.userData.updateInfo(formData).subscribe({
        next:(response)=>{
          formData.forEach((value, key) => {
            console.log(key, value);
          });
          
          
        }
      })
       
      // this.http.post('YOUR_API_ENDPOINT', formData).subscribe({
      //   next: (response) => {
      //     console.log('Image uploaded successfully', response);
      //   },
      //   error: (err) => {
      //     console.error('Error uploading image', err);
      //   }
      // });
    }
  }
}
