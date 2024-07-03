import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-files-in-clinic',
  templateUrl: './view-user-files-in-clinic.component.html',
  styleUrls: ['./view-user-files-in-clinic.component.css']
})
export class ViewUserFilesInClinicComponent implements OnInit {
  userId: any;
  data: any;
  clinicsIDs: any[] = [];
  clinics: any[] = [];

  constructor(
    private service: InstitutionsService,
    private route: ActivatedRoute,
    private router: Router,
    private userData: UserDataService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.fetchUserData();
      } else {
        Swal.fire('Error', 'User ID is missing.', 'error');
        this.router.navigate(['/clinic']); // Redirect to a safe route
      }
    });
  }

  fetchUserData(): void {
    this.service.getUserByIdClinic(this.userId).subscribe({
      next: (response) => {
        this.data = response.user;
        this.clinicsIDs = this.data.diagnosis || [];
        this.fetchClinicData();
      },
      error: (err) => {
        console.error('Error fetching user data', err);
        Swal.fire('Error', 'Failed to fetch user data.', 'error');
      }
    });
  }

  fetchClinicData(): void {
    for (let clinicID of this.clinicsIDs) {
      this.userData.getClinicById(clinicID.clinic).subscribe({
        next: (response) => {
          this.clinics.push(response);
        },
        error: (err) => {
          console.error('Error fetching clinic data', err);
          Swal.fire('Error', 'Failed to fetch clinic data.', 'error');
        }
      });
    }
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
