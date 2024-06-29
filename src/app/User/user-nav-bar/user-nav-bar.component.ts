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
      next: (response) => {
        this.MedicalAnalysis = response.pendingMedicalAnalysis
        for (let i of this.MedicalAnalysis) {  
          console.log(i.type,"---------");
          if (i.type == "lab") {
            this.userData.getLabById(i.id).subscribe({
              next: (response) => {
                this.Info.push(response)
              }
            })
          }
         else{          
          this.userData.getClinicById(i.id).subscribe({
            next: (response) => {
              this.Info.push(response)
            }
          })
         }
        }
      }
    })
    this.userData.clinicnotification().subscribe({
      next: (response) => {
        this.diagnosis = response.pendingDiagnosis
        for (let i of this.diagnosis) {
          this.userData.getClinicById(i.clinic).subscribe({
            next: (response) => {
              this.clinicInfo.push(response)
            }
          })
        }

      }
    })

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
  viewlab(id: any) {

    this.router.navigate(['/UserProfile/labProfile'], { queryParams: { id: id } })
  }
  viewclinic(id: any) {
    this.router.navigate(['/UserProfile/clinicProfile'], { queryParams: { id: id } })
  }
  acceptMedicalAnalysisFiles(name: any, id: any) {
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
        this.attachStarRatingListeners();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userData.acceptMedicalAnalysisFiles(id).subscribe({
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

  acceptDiagnosesFiles(name: any, id: any) {
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
        this.attachStarRatingListeners();
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

  rejectMedicalAnalysisFiles(name: any, id: any) {
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
        this.attachStarRatingListeners();
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
  
  rejectDiagnosesFiles(name: any, id: any) {
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
        this.attachStarRatingListeners();
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
  

  attachStarRatingListeners() {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i) => {
      star.addEventListener('click', () => {
        this.updateStarRating(i + 1);
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
