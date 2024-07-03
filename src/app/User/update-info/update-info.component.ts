import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  selectedFile: File | null = null;
  form: FormGroup;
  defaultImageUrl: string = 'assets/imgs/default_user.webp';
  data: any = {};
  
  constructor(
    private userData: UserDataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      address: [''],
      weight: [''],
      height: [''],
      bloodType: [''],
      personalMedicalHistory: this.fb.group({
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
        ulcerativeColitis: [false],
      }),
      personalSurgicalHistory: this.fb.group({
        adrenalGlandSurgery: [false],
        colonSurgery: [false],
        kidneySurgery: [false],
        appendectomy: [false],
        arterySurgery: [false],
        neckSurgery: [false],
        thyroidSurgery: [false],
        esophagusSurgery: [false],
        prostateSurgery: [false],
        bladderSurgery: [false],
        largeIntestineSurgery: [false],
        gastricBypassSurgery: [false],
        lungSurgery: [false],
        smallIntestineSurgery: [false],
        breastSurgery: [false],
        hemorrhoidSurgery: [false],
        spineSurgery: [false],
        uterusSurgery: [false],
        cesareanSection: [false],
        stomachSurgery: [false],
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
      emergencyContacts: this.fb.array([
        this.fb.group({
          address: [''],
          firstName: [''],
          lastName: [''],
          phone: [''],
        }),
        this.fb.group({
          address: [''],
          firstName: [''],
          lastName: [''],
          phone: [''],
        })
      ])
    });
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.userData.getUserData().subscribe({
      next: (response) => {
        this.data = response;
        this.populateForm();
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      }
    });
  }

  populateForm(): void {
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
      personalMedicalHistory: this.data.personalMedicalHistory,
      personalSurgicalHistory: this.data.personalSurgicalHistory,
      personalAllergiesHistory: this.data.personalAllergiesHistory,
      familyMedicalHistory: this.data.familyMedicalHistory,
      emergencyContacts: [
        {
          address: this.data.emergencyContacts[0]?.address || '',
          firstName: this.data.emergencyContacts[0]?.firstName || '',
          lastName: this.data.emergencyContacts[0]?.lastName || '',
          phone: this.data.emergencyContacts[0]?.phone || '',
        },
        {
          address: this.data.emergencyContacts[1]?.address || '',
          firstName: this.data.emergencyContacts[1]?.firstName || '',
          lastName: this.data.emergencyContacts[1]?.lastName || '',
          phone: this.data.emergencyContacts[1]?.phone || '',
        }
      ]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return control ? control.invalid && control.touched : false;
  }

  updateInfo(): void {
    if (this.form.valid) {
      this.userData.updateInfo(this.form.value).subscribe({
        next: (response) => {
          if (response.message === 'updated successfully') {
            Swal.fire('Success', 'Information updated successfully', 'success').then(() => {
              this.router.navigate(['/dashboard']);
            });
          } else {
            Swal.fire('Error', 'Failed to update information', 'error');
          }
        },
        error: (err) => {
          console.error('Error updating information:', err);
          Swal.fire('Error', 'Failed to update information', 'error');
        }
      });
    } else {
      Swal.fire('Validation Error', 'Please fill out all required fields', 'error');
      this.markFormGroupTouched(this.form);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
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
      this.uploadImage();
    }
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('profile_images', this.selectedFile, this.selectedFile.name);
      this.userData.updateImage(formData).subscribe({
        next: (response) => {
          console.log('Image uploaded successfully', response);
          Swal.fire('Success', 'Profile image updated successfully', 'success');
        },
        error: (err) => {
          console.error('Error uploading image', err);
          Swal.fire('Error', 'Failed to upload profile image', 'error');
        }
      });
    }
  }
}
