import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/institutions.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-user-profile-in-clinic',
  templateUrl: './view-user-profile-in-clinic.component.html',
  styleUrls: ['./view-user-profile-in-clinic.component.css']
})
export class ViewUserProfileInClinicComponent implements OnInit{
  constructor(private service:InstitutionsService, private route:ActivatedRoute ,private router:Router){}
  userId:any
  userData:any
  anlaysisFile: File | null = null
  diagnoseFile: File | null = null
  analysisText: string =""
  clinicId:string=''
  defaultImageUrl: string = 'assets/imgs/default_user.webp'; 
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['id']
    })
     this.service.getUserByIdClinic(this.userId).subscribe({
      next:(response)=>{
        this.userData=response.user
        console.log(this.userData,"jjjjj");
      }
     })
     this.service.getClinicByToken().subscribe({
      next:(response)=>{
        this.clinicId=response.clinic._id
      }
    })
   
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
  onChangeAnalysis(event: any) {
    const file: File = event.target.files[0]
    if (file) {
      this.anlaysisFile = file
    }
  }
  onChangeDiagnose(event: any) {
    const file: File = event.target.files[0]
    if (file) {
      this.diagnoseFile = file
    }
  }
  onTextInputChangeAnalysis(event: any) {
    this.analysisText = event.target.value;
  }
  onSubmitAnalysis() {
    if (this.anlaysisFile && this.analysisText ) {
      const formData = new FormData();
      formData.append("pdf", this.anlaysisFile, this.anlaysisFile.name)
      formData.append("testname", this.analysisText)
      this.service.uploadAnalysisByClinic(this.clinicId, this.userData._id, formData).subscribe({
        next: (response) => {
         
        }
      })
    }
  }
  onSubmitDiagnose() {
    if (this.diagnoseFile ) {
      const formData = new FormData();
      formData.append("pdf", this.diagnoseFile, this.diagnoseFile.name)
      this.service.uploadDiagnoseByClinic(this.clinicId, this.userData._id, formData).subscribe({
        next: (response) => {
        }
      })
    }
  }
  saveAnalysis(){
    Swal.fire({
      title: "Do you want to Upload this File?",
      showCancelButton: true,
      confirmButtonText: "Upload",
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmitAnalysis()
        Swal.fire("Saved!", "", "success").then(() => {
          location.reload()
        });;
      } else if (result.isDenied) {
        Swal.fire("File is not Uploaded", "", "info");
      }
    });
  }
  saveDiagnose() {
    Swal.fire({
      title: "Do you want to Upload this File?",
      showCancelButton: true,
      confirmButtonText: "Upload",
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmitDiagnose()
        Swal.fire("Saved!", "", "success").then(() => {
          location.reload()
        });;
      } else if (result.isDenied) {
        Swal.fire("File is not Uploaded", "", "info");
      }
    });
  }
medicalFiles(){
  this.router.navigate(['/clinic/userFiles'], { queryParams: { id: this.userId } })
}
}
