import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  userData=null;
  decodeToken(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData=decodedToken
  }
  constructor(private _httpClient:HttpClient) { }
  login(userData:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/users/signIN",userData)
  }
}
