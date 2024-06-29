import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  notclicked:boolean=true
  header:any={
    Authorization : localStorage.getItem("Admintoken")
  }
  addClinic(clincData:any):Observable<any>{
    return this.http.post("http://localhost:3000/clinics/add",clincData,{headers:this.header})
  }
  addlab(labData:any):Observable<any>{
    return this.http.post("http://localhost:3000/labs/add",labData,{headers:this.header})
  }

  getClinics():Observable<any>{
    return this.http.get("http://localhost:3000/clinics",{headers:this.header})
  }

  getlabs():Observable<any>{
    return this.http.get("http://localhost:3000/labs",{headers:this.header})
  }
editLabs(id:any,editData:any):Observable<any>{
  return this.http.put(`http://localhost:3000/labs/${id}`,editData,{headers:this.header})
}
editclinics(id:any,editData:any):Observable<any>{
  return this.http.put(`http://localhost:3000/clinics/${id}`,editData,{headers:this.header})
}
deleteClinics(id:any):Observable<any>{
  return this.http.delete(`http://localhost:3000/clinics/${id}`,{headers:this.header})
}
deleteLabs(id:any):Observable<any>{
  return this.http.delete(`http://localhost:3000/labs/${id}`,{headers:this.header})
}
}
