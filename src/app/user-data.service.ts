import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  constructor(private http:HttpClient) { }
  header:any={
    token:"Bearer "+localStorage.getItem('userToken')
  }
  getUserData():Observable<any>{
    return this.http.get("http://localhost:3000/users/profile",{headers:this.header})
  }
}
