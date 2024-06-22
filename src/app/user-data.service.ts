import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http:HttpClient) { }
  header:any={
    token:localStorage.getItem('Authorization')
  }
  getUserData():Observable<any>{
    return this.http.get("http://localhost:3000/users/profile",{headers:this.header})
  }
  changePass(userData:any):Observable<any>{
    return this.http.put("http://localhost:3000/users/updatePassword",userData,{headers:this.header})
  }
  updateInfo(userData:any):Observable<any>{
    return this.http.put("http://localhost:3000/users/updateProfile",userData,{headers:this.header})
  }
}
