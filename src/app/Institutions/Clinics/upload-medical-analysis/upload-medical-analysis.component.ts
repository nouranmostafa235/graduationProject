import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-upload-medical-analysis',
  templateUrl: './upload-medical-analysis.component.html',
  styleUrls: ['./upload-medical-analysis.component.css']
})
export class UploadMedicalAnalysisComponent implements OnInit{
  constructor(private service: InstitutionsService) { }
  file: File | null = null
  text: string =""
  allusers:any
  searchVal=''
  selectedUserId: string = ''
 clinicId:string=''
 clinicInfo:any
 ngOnInit(): void {
  this.service.getallUsers().subscribe({
    next:(response)=>{
      this.allusers=response
    }
  })
  this.service.getClinicByToken().subscribe({
    next:(response)=>{
      this.clinicId=response.clinic._id
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
onTextInputChange(event: any) {
  this.text = event.target.value;
}
onSubmit() {
  if (this.file && this.text &&this.selectedUserId) {
    const formData = new FormData();
    formData.append("pdf", this.file, this.file.name)
    formData.append("testname", this.text)
    this.service.uploadAnalysisByClinic(this.clinicId, this.selectedUserId, formData).subscribe({
      next: (response) => {
       
      }
    })
  }
}
save(){
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
