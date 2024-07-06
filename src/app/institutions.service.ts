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
    return this.http.get("https://rabid-rx-back-end.vercel.app/clinics/getClinicByToken", { headers: this.ClinicHeader })
  }
  getLabByToken(): Observable<any> {
    return this.http.get("https://rabid-rx-back-end.vercel.app/labs/getLabByToken", { headers: this.labHeader })
  }
  uploadAnalysisByLab(labId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`https://rabid-rx-back-end.vercel.app/labs/${labId}/users/${userId}/medicalAnalysis`, formdata)
  }
  uploadAnalysisByClinic(clinicId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`https://rabid-rx-back-end.vercel.app/clinics/${clinicId}/users/${userId}/medicalAnalysis`, formdata)
  }
  uploadDiagnoseByClinic(clinicId: any, userId: any, formdata: any): Observable<any> {
    return this.http.post(`https://rabid-rx-back-end.vercel.app/clinics/${clinicId}/users/${userId}/diagnoses`, formdata)
  }
  getallUsers():Observable<any[]>{
    return this.http.get<any[]>("https://rabid-rx-back-end.vercel.app/users/getall")
  }
  getUserByIdClinic(userId:any):Observable<any>{
   return this.http.get(`https://rabid-rx-back-end.vercel.app/users/userById/${userId}`,{headers:this.ClinicHeader})
  }
  getUserByIdLab(userID:any):Observable<any>{
    return this.http.get(`https://rabid-rx-back-end.vercel.app/users/userById/${userID}`,{headers:this.labHeader})
  }
  logOutClinic():Observable<any>{
    return this.http.put('https://rabid-rx-back-end.vercel.app/clinics/logout',null,{headers:this.ClinicHeader})
  }
  logOutLab():Observable<any>{
    return this.http.put('https://rabid-rx-back-end.vercel.app/labs/logout',null,{headers:this.labHeader})
  }

}
