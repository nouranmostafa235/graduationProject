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
  updateImage(userData:any):Observable<any>{
    return this.http.put("http://localhost:3000/users/updateImage",userData,{headers:this.header})
  }
  getPrediction(userData:any):Observable<any>{
    return this.http.post("http://localhost:3000/users/predict",userData,{headers:this.header})
  }
  logOut():Observable<any>{
    return this.http.put("http://localhost:3000/users/logout",null,{headers:this.header})
  }
 pending():Observable<any>{
  return this.http.get("http://localhost:3000/users/numOfNotification",{headers:this.header})
 }
 medicalAnalysisnotifications():Observable<any>{
  return this.http.get("http://localhost:3000/notifications/getPendingMedicalAnalysis",{headers:this.header})
 }
 clinicnotification():Observable<any>{
  return this.http.get("http://localhost:3000/notifications/getPendingDiagnosis",{headers:this.header})
 }
 getLabById(id:any):Observable<any>{
  return this.http.get(`http://localhost:3000/labs/${id}`)
 }
 getClinicById(id:any):Observable<any>{
  return this.http.get(`http://localhost:3000/clinics/${id}`)
 }
 acceptMedicalAnalysisFiles(id:any):Observable<any>{
  return this.http.post(`http://localhost:3000/notifications/acceptMedicalAnalysis/${id}`,{},{headers:this.header})
 }
 acceptClinicFiles(id:any):Observable<any>{
  return this.http.post(`http://localhost:3000/notifications/acceptDiagnosis/${id}`,{},{headers:this.header})
 }
 rejectMedicalAnalysisFiles(id:any):Observable<any>{
  return this.http.post(`http://localhost:3000/notifications/rejectMedicalAnalysis/${id}`,{},{headers:this.header})
 }
 rejectClinicFiles(id:any):Observable<any>{
  return this.http.post(`http://localhost:3000/notifications/rejectDiagnosis/${id}`,{},{headers:this.header})
 }
 Labrating(id:any,ratingNum:any):Observable<any>{
  return this.http.put(`http://localhost:3000/users/labEvaluation/${id}`,ratingNum,{headers:this.header})
 }
 clinicRating(id:any,ratingNum:any):Observable<any>{
  return this.http.put(`http://localhost:3000/users/clinicEvaluation/${id}`,ratingNum,{headers:this.header})
 }
}
