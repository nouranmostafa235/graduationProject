import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-diagnose',
  templateUrl: './upload-diagnose.component.html',
  styleUrls: ['./upload-diagnose.component.css']
})
export class UploadDiagnoseComponent implements OnInit {
  constructor(private service: InstitutionsService) { }
  file: File | null = null
  allusers: any
  searchVal = ''
  selectedUserId: string = ''
  clinicId: string = ''
  ngOnInit(): void {
    this.service.getallUsers().subscribe({
      next: (response) => {
        this.allusers = response
      }
    })
    this.service.getClinicByToken().subscribe({
      next: (response) => {
        this.clinicId = response.clinic._id
      }
    })
  }
  setSelectedUser(userId: string) {
    this.selectedUserId = userId;
  }
  onChange(event: any) {
    const file: File = event.target.files[0]
    if (file) {
      this.file = file
    }
  }
  onSubmit() {
    if (this.file && this.selectedUserId) {
      const formData = new FormData();
      formData.append("pdf", this.file, this.file.name)
      this.service.uploadDiagnoseByClinic(this.clinicId, this.selectedUserId, formData).subscribe({
        next: (response) => {
        }
      })
    }
  }
  save() {
    Swal.fire({
      title: "Do you want to Upload this File?",
      showCancelButton: true,
      confirmButtonText: "Upload",
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmit()
        Swal.fire("Saved!", "", "success").then(() => {
          location.reload()
        });;
      } else if (result.isDenied) {
        Swal.fire("File is not Uploaded", "", "info");
      }
    });
  }
}
