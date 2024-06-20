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
  decodeToken(){
    let encodedToken = JSON.stringify(localStorage.getItem('Authorization'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken)
  }
  
  logOut(){
    localStorage.removeItem('Authorization')
    this.userData.next(null)
    this.router.navigate(['/login'])
  }
  login(userData:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/users/signIN",userData)
  }
}
