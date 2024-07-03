import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent implements OnInit {
  data: any;
  clinicsIDs: any[] = [];
  clinics: any[] = [];
  defaultImageUrl: string = 'assets/imgs/default_user.webp';

  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response;
        this.clinicsIDs = response.diagnosis.map((diagnosis: any) => diagnosis.clinic);
        this.fetchClinics();
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
        // Handle error, e.g., show a message to the user
      }
    });
  }

  fetchClinics(): void {
    const clinicRequests = this.clinicsIDs.map(clinicId =>
      this.userData.getClinicById(clinicId)
    );

    Promise.all(clinicRequests).then(responses => {
      this.clinics = responses;
    }).catch(error => {
      console.error('Error fetching clinics:', error);
    });
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
