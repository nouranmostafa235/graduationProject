import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent implements OnInit {
constructor(private userData:UserDataService){}
data:any
clinicsIDs:any[]=[{}]
clinics:any[]=[]
defaultImageUrl: string = 'assets/imgs/default_user.webp'; 
ngOnInit(): void {
  this.userData.getUserData().subscribe({
    next: (response) => {
      this.data = response
      this.clinicsIDs=response.diagnosis
      console.log(this.clinicsIDs.length,"id");
      for(let i=0 ;i<this.clinicsIDs.length;i++){
        this.userData.getClinicById(this.clinicsIDs[i].clinic).subscribe({
          next:(response)=>{
            this.clinics.push(response)        
          }
        })
        
      }
      
    }
  })  
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
