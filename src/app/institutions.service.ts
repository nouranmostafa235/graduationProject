import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  constructor(private http: HttpClient) { }
  ClinicHeader: any = {
    token: localStorage.getItem('clinicTokin')
  }
  labHeader: any = {
    token: localStorage.getItem('labTokin')
  }
  getClinicByToken(): Observable<any> {
    return this.http.get("http://localhost:3000/clinics/getClinicByToken", { headers: this.ClinicHeader })
  }
  getLabByToken(): Observable<any> {
    return this.http.get("http://localhost:3000/labs/getLabByToken", { headers: this.labHeader })
  }
  uploadAnalysisByLab(labId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`http://localhost:3000/labs/${labId}/users/${userId}/medicalAnalysis`, formdata)
  }
  uploadAnalysisByClinic(clinicId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`http://localhost:3000/clinics/${clinicId}/users/${userId}/medicalAnalysis`, formdata)
  }
  uploadDiagnoseByClinic(clinicId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`http://localhost:3000/clinics/${clinicId}/users/${userId}/diagnoses`, formdata)
  }
  getallUsers():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/users/getall")
  }
  getUserByIdClinic(userId:any):Observable<any>{
   return this.http.get(`http://localhost:3000/users/userById/${userId}`,{headers:this.ClinicHeader})
  }
  getUserByIdLab(userID:any):Observable<any>{
    return this.http.get(`http://localhost:3000/users/userById/${userID}`,{headers:this.labHeader})
  }
  logOutClinic():Observable<any>{
    return this.http.put('http://localhost:3000/clinics/logout',null,{headers:this.ClinicHeader})
  }
  logOutLab():Observable<any>{
    return this.http.put('http://localhost:3000/labs/logout',null,{headers:this.labHeader})
  }

}
