import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-medical-analysis',
  templateUrl: './upload-medical-analysis.component.html',
  styleUrls: ['./upload-medical-analysis.component.css']
})
export class UploadMedicalAnalysisComponent implements OnInit {
  file: File | null = null;
  text: string = "";
  allusers: any;
  searchVal = '';
  selectedUserId: string = '';
  clinicId: string = '';

  constructor(private service: InstitutionsService) { }

  ngOnInit(): void {
    this.service.getallUsers().subscribe({
      next: (response) => {
        this.allusers = response;
      },
      error: (err) => {
        console.error('Error fetching users', err);
        Swal.fire('Error', 'Failed to fetch users.', 'error');
      }
    });

    this.service.getClinicByToken().subscribe({
      next: (response) => {
        this.clinicId = response.clinic._id;
      },
      error: (err) => {
        console.error('Error fetching clinic info', err);
        Swal.fire('Error', 'Failed to fetch clinic information.', 'error');
      }
    });
  }

  setSelectedUser(userId: string) {
    this.selectedUserId = userId;
  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
    } else {
      Swal.fire('Warning', 'Please select a file.', 'warning');
    }
  }

  onTextInputChange(event: any) {
    this.text = event.target.value;
  }

  onSubmit() {
    if (this.file && this.text && this.selectedUserId) {
      const formData = new FormData();
      formData.append("pdf", this.file, this.file.name);
      formData.append("testname", this.text);

      this.service.uploadAnalysisByClinic(this.clinicId, this.selectedUserId, formData).subscribe({
        next: (response) => {
          Swal.fire('Success', 'File uploaded successfully.', 'success');
        },
        error: (err) => {
          console.error('Error uploading file', err);
          Swal.fire('Error', 'Failed to upload file.', 'error');
        }
      });
    } else {
      Swal.fire('Warning', 'Please fill in all fields.', 'warning');
    }
  }

  save() {
    Swal.fire({
      title: 'Do you want to upload this file?',
      showCancelButton: true,
      confirmButtonText: 'Upload',
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmit();
      } else if (result.isDenied) {
        Swal.fire('File is not uploaded', '', 'info');
      }
    });
  }
}
