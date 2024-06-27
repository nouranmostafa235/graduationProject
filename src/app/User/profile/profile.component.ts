import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit , AfterViewInit{
  constructor(private userData: UserDataService, private router: Router) { }
  data: any
  labMedicalAnalysis: any[] = []
  labInfo: any[] = []
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
    this.userData.labnotifications().subscribe({
      next: (response) => {
        this.labMedicalAnalysis = response.pendingMedicalAnalysis
        for (let i of this.labMedicalAnalysis) {
          this.userData.getLabById(i.lab).subscribe({
            next: (response) => {
              this.labInfo.push(response)

            }
          })
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
  ngAfterViewInit(): void {
    
  }
  logOut() {
    this.userData.logOut().subscribe({
      next: (response) => {
        this.router.navigate(['/login'])
      }
    })
  }

  openPdf(pdfPath: string) {
    window.open(pdfPath, '_blank');
  }
  viewlab(id: any) {

    this.router.navigate(['/labProfile'], { queryParams: { id: id } })
  }
  viewclinic(id: any) {
    this.router.navigate(['/clinicProfile'], { queryParams: { id: id } })
  }
  accept(name: any) {
    Swal.fire({
      
      title: `Do you want to accept this file from ${name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: `Reject`,
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
        Swal.fire('File Accepted!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Files are Rejected', '', 'info');
      }
    });
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
