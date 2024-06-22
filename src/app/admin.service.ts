import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  header:any={
    Authorization : localStorage.getItem("Admintoken")
  }
  addClinic(clincData:any):Observable<any>{
    return this.http.post("http://localhost:3000/clinics/add",clincData,{headers:this.header})
  }
  getClinics():Observable<any>{
    return this.http.get("http://localhost:3000/clinics",{headers:this.header})
  }
}
