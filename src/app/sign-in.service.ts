import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _httpClient:HttpClient) { }
  login(userData:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/users/signIN",userData)
  }
}
