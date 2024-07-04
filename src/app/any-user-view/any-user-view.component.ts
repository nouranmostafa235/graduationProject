import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-any-user-view',
  templateUrl: './any-user-view.component.html',
  styleUrls: ['./any-user-view.component.css']
})
export class AnyUserViewComponent implements OnInit{
  constructor(private userData: UserDataService , private route:ActivatedRoute) { }
  data: any
  userId:any
  defaultImageUrl: string = 'assets/imgs/default_user.webp';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['id']
    })
    this.userData.getUserDataBId(this.userId).subscribe({
      next: (response) => {
        this.data = response.user     
        console.log(this.data);
          
      }
    })
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
}
