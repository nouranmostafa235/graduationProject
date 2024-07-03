import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-profile-in-lab',
  templateUrl: './view-user-profile-in-lab.component.html',
  styleUrls: ['./view-user-profile-in-lab.component.css']
})
export class ViewUserProfileInLabComponent {
  constructor(private service:InstitutionsService, private route:ActivatedRoute){}
  defaultImageUrl: string = 'assets/imgs/default_user.webp'; 
  userId:any
  userData:any
  file: File | null = null
  text: string =""
  labId:string=''

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['id']
    })
     this.service.getUserByIdLab(this.userId).subscribe({
      next:(response)=>{
        this.userData=response.user
      }
     })
     this.service.getLabByToken().subscribe({
      next:(response)=>{
        this.labId=response.lab._id
      }
    })
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
    if (this.file && this.text &&this.userData._id) {
      const formData = new FormData();
      formData.append("pdf", this.file, this.file.name)
      formData.append("testname", this.text)
      this.service.uploadAnalysisByLab(this.labId, this.userData._id, formData).subscribe({
        next: (response) => {         
        }
      })
    }
  }
  save(){
    Swal.fire({
      title: "Do you want to Upload this File?",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Upload",
      // denyButtonText: `Don't save`
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
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }

}
