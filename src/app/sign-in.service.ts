import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private _httpClient:HttpClient ,private router:Router) { }
  userData=new BehaviorSubject(null);
  adminData=new BehaviorSubject(null);
  decodeToken(){
    let encodedToken = JSON.stringify(localStorage.getItem('Authorization'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken)
  }
  decodeAdminToken(){
    let encodedToken = JSON.stringify(localStorage.getItem('Admintoken'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.adminData.next(decodedToken)
  }
  adminLogOut(){
    localStorage.removeItem('Admintoken')
    this.adminData.next(null)
    this.router.navigate(['/adminLogin'])
  }
  login(userData:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/users/signIN",userData)
  }
  adminLogin(adminData:any):Observable<any>{
   return this._httpClient.post("http://localhost:3000/admin/signIN",adminData)
  }

  clinicLogin(clinicData:any):Observable<any>{
     return this._httpClient.post("http://localhost:3000/clinics/signIn",clinicData)
  }

  labLogin(labData:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/labs/signIn",labData)
 }
}
