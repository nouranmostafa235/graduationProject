import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {
  constructor(private userData: UserDataService, private router: Router) { }

  data: any
  MedicalAnalysis: any[] = []
  Info: any[] = []
  diagnosis: any[] = []
  clinicInfo: any[] = []
  notificationNum: any
  labId:any
  clinicID:any
  clinicRating:any=0
  LabRating:any=0
  ratingNum :any={
    evaluation: this.LabRating
  }
  ClinicratingNum:any={
    evalution:this.clinicRating
  }
  
  ngOnInit(): void {

    this.userData.pending().subscribe({
      next: (response) => {
        this.notificationNum = response.numberOfPendingNotification
      }
    })
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response
      }
    })
    this.userData.medicalAnalysisnotifications().subscribe({
      next: async (response) => {
        this.MedicalAnalysis = response.pendingMedicalAnalysis;
        this.Info = []; 
    
        const analysisPromises = this.MedicalAnalysis.map(i => {
          if (i.type === "lab") {
            return this.userData.getLabById(i.id).toPromise();
          } else {
            return this.userData.getClinicById(i.id).toPromise();
          }
        });
    
        try {
          const analysisResults = await Promise.all(analysisPromises);
          this.Info.push(...analysisResults);
        } catch (error) {
          console.error('Error fetching medical analysis:', error);
        }
      }
    });
    this.userData.clinicnotification().subscribe({
      next: async (response) => {
        this.diagnosis = response.pendingDiagnosis;
        this.clinicInfo = [];
    
        const diagnosisPromises = this.diagnosis.map(i => 
          this.userData.getClinicById(i.clinic).toPromise()
        );
    
        try {
          const diagnosisResults = await Promise.all(diagnosisPromises);
          this.clinicInfo.push(...diagnosisResults);
        } catch (error) {
          console.error('Error fetching clinic information:', error);
        }
      }
    });

  }
  logOut() {

    this.userData.logOut().subscribe({
      next: (response) => {
        this.router.navigate(['/login'])
      }
    })
    localStorage.removeItem("Authorization")

  }

  openPdf(pdfPath: string) {
    window.open(pdfPath, '_blank');
  }
  view(id: any,type:any) {
     if(type==="lab"){
        this.router.navigate(['/UserProfile/labProfile'], { queryParams: { id: id } })
     }
     else{
      this.router.navigate(['/UserProfile/clinicProfile'], { queryParams: { id: id } })
     }
  
  }
 
  viewclinic(id: any) {
    this.router.navigate(['/UserProfile/clinicProfile'], { queryParams: { id: id } })
  }
  acceptMedicalAnalysisFiles(name: any, id: any,IId:any,type:any) {
    Swal.fire({
      title: `Confirm Acceptance`,
      showDenyButton: false,
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      footer: `
        <h4>Rate ${name}</h4>
        <div class="starsRating d-flex justify-content-center align-items-center" style="user-select: none; display: flex; justify-content: center; align-items: center;">
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
        </div>
      `,

      didOpen: () => {
        if(type==="lab"){
          this.attachStarRatingListeners(IId);
        }
        else{
          this.attachStarRatingListenersClinic(IId)
        }
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
       
        this.userData.acceptMedicalAnalysisFiles(id).subscribe({
          next: (response) => { 
          }
        })
        Swal.fire('File Accepted', '', 'success').then(() => { 
        
          this.reload();
        });
      }
    });
  }

  acceptDiagnosesFiles(name: any, id: any,IId:any) {
    Swal.fire({
      title: `Confirm Acceptance`,
      showDenyButton: false,
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      footer: `
        <h4>Rate ${name}</h4>
        <div class="starsRating d-flex justify-content-center align-items-center" style="user-select: none; display: flex; justify-content: center; align-items: center;">
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
        </div>
      `,

      didOpen: () => {
        this.attachStarRatingListenersClinic(IId);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userData.acceptClinicFiles(id).subscribe({
          next: (response) => {
            console.log(response);
          }
        })
        Swal.fire('File Accepted', '', 'success').then(() => {
          this.reload();
        });
      }
    });
  }

  rejectMedicalAnalysisFiles(name: any, id: any,IId:any,type:any) {
    Swal.fire({
      title: `Confirm Rejection`,
      showDenyButton: false,
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      icon:"error",
      footer: `
        <h4>Rate ${name}</h4>
        <div class="starsRating d-flex justify-content-center align-items-center" style="user-select: none; display: flex; justify-content: center; align-items: center;">
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
        </div>
      `,
      didOpen: () => {
        if(type==="lab"){
          this.attachStarRatingListeners(IId);
        }
        else{
          this.attachStarRatingListenersClinic(IId)
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userData.rejectMedicalAnalysisFiles(id).subscribe({
          next: (response) => {
            console.log(response);
            Swal.fire('File Rejected!', '', 'success').then(() => {
              this.reload();
            });
          }
        });
      }
    });
  }
  
  rejectDiagnosesFiles(name: any, id: any,IId:any) {
    Swal.fire({
      title: `Confirm Rejection`,
      showDenyButton: false,
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      icon:"error",
      footer: `
        <h4>Rate ${name}</h4>
        <div class="starsRating d-flex justify-content-center align-items-center" style="user-select: none; display: flex; justify-content: center; align-items: center;">
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
          <button class="star" style="font-size: 2rem; color: #ffd43b; background-color: unset; border: none;">&#9734;</button>
        </div>
      `,
      didOpen: () => {
        this.attachStarRatingListenersClinic(IId);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userData.rejectClinicFiles(id).subscribe({
          next: (response) => {
            console.log(response);
            Swal.fire('File Rejected!', '', 'success').then(() => {
              this.reload();
            });
          }
        });
      }
    });
  }
  reload() {
    location.reload();
  }
  

  attachStarRatingListeners(id:any) {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i) => {
      star.addEventListener('click', () => {
        this.updateStarRating(i + 1);
        this.labId=id
        this.LabRating=i+1
        this.ratingNum.evaluation=this.LabRating
        console.log(this.labId,this.LabRating);
        this.sendRating()
      });
    });
  }
  sendRating(){
    console.log(this.labId,this.ratingNum);
    this.userData.Labrating(this.labId,this.ratingNum).subscribe({
      next:(response)=>{ 
      }
    })
  }
  sendClinicRating(){
    this.userData.clinicRating(this.clinicID,this.ClinicratingNum).subscribe({
      next:(response)=>{

      }
    })
  }
  attachStarRatingListenersClinic(id:any) {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i) => {
      star.addEventListener('click', () => {
        this.updateStarRating(i + 1);
        this.clinicID=id
        this.clinicRating=i+1
        this.ClinicratingNum.evaluation=this.clinicRating
        this.sendClinicRating() 
      });
    });
  }
  updateStarRating(rating: number) {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i) => {
      if (i < rating) {
        star.innerHTML = '&#9733';
      } else {
        star.innerHTML = '&#9734';
      }
    });
  }

  rating() {
    const allstars = document.querySelectorAll('.star')
    allstars.forEach((star, i) => {
      star.addEventListener('click', () => {
        let curr = i + 1;
        allstars.forEach((star, j) => {
          if (curr >= j + 1) {
            star.innerHTML = '&#9733'
          }
          else {
            star.innerHTML = '&#9734'
          }
        })
      })
    })

  }


}
