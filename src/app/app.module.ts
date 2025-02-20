import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicalInfoComponent } from './register/medical-info/medical-info.component';
import { EmergencyContactComponent } from './register/emergency-contact/emergency-contact.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProfileComponent } from './User/profile/profile.component';
import { FamilyHistoryComponent } from './User/family-history/family-history.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { UpdateInfoComponent } from './User/update-info/update-info.component';
import { PredictComponent } from './User/predict/predict.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgwWowModule } from 'ngx-wow';
import { HttpClientModule } from '@angular/common/http';
import { InstitutionLoginComponent } from './institution-login/institution-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { ClinicComponent } from './Admin/clinic/clinic.component';
import { LabComponent } from './Admin/lab/lab.component';
import { LabLoginComponent } from './Institutions/Labs/lab-login/lab-login.component';
import { LabHomePageComponent } from './Institutions/Labs/lab-home-page/lab-home-page.component';
import { ClinicHomePageComponent } from './Institutions/Clinics/clinic-home-page/clinic-home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewInstitutionProfileComponent } from './User/view-institution-profile/view-institution-profile.component';
import { ViewClinicProfileComponent } from './User/view-clinic-profile/view-clinic-profile.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserNavBarComponent } from './User/user-nav-bar/user-nav-bar.component';
import { SearchLabsPipe } from './Pipes/search-labs.pipe';
import { SearchClinicPipe } from './Pipes/search-clinic.pipe';
import { UploadDiagnoseComponent } from './Institutions/Clinics/upload-diagnose/upload-diagnose.component';
import { UploadMedicalAnalysisComponent } from './Institutions/Clinics/upload-medical-analysis/upload-medical-analysis.component';
import { LabUploadMedicalAnalysisComponent } from './Institutions/Labs/lab-upload-medical-analysis/lab-upload-medical-analysis.component';
import { LabNavbarComponent } from './Institutions/Labs/lab-navbar/lab-navbar.component';
import { ClinicNavBarComponent } from './Institutions/Clinics/clinic-nav-bar/clinic-nav-bar.component';
import { SearchUsersPipe } from './search-users.pipe';
import { ViewUserProfileInClinicComponent } from './Institutions/Clinics/view-user-profile-in-clinic/view-user-profile-in-clinic.component';
import { ChooseViewOptionClinicComponent } from './Institutions/Clinics/choose-view-option-clinic/choose-view-option-clinic.component';
import { ViewBySearchINClinicComponent } from './Institutions/Clinics/view-by-search-inclinic/view-by-search-inclinic.component';
import { ViewOptionsInLabComponent } from './Institutions/Labs/view-options-in-lab/view-options-in-lab.component';
import { ViewBySearchInlabComponent } from './Institutions/Labs/view-by-search-inlab/view-by-search-inlab.component';
import { ViewUserProfileInLabComponent } from './Institutions/Labs/view-user-profile-in-lab/view-user-profile-in-lab.component';
import {  ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeScannerComponent } from './QRCode/qr-code-scanner/qr-code-scanner.component';
import { UserFilesComponent } from './User/user-files/user-files.component';
import { ViewUserFilesInClinicComponent } from './Institutions/Clinics/view-user-files-in-clinic/view-user-files-in-clinic.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { ScannerInLabComponent } from './Institutions/Labs/scanner-in-lab/scanner-in-lab.component';
import { AnyUserViewComponent } from './any-user-view/any-user-view.component';

LOAD_WASM().subscribe();
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MedicalInfoComponent,
    EmergencyContactComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    FamilyHistoryComponent,
    ChangePasswordComponent,
    UpdateInfoComponent,
    PredictComponent,
    SideBarComponent,
    InstitutionLoginComponent,
    AdminLoginComponent,
    AdminHomePageComponent,
    ClinicComponent,
    LabComponent,
    LabLoginComponent,
    LabHomePageComponent,
    ClinicHomePageComponent,
    ViewInstitutionProfileComponent,
    ViewClinicProfileComponent,
    UserNavBarComponent,
    SearchLabsPipe,
    SearchClinicPipe,
    UploadDiagnoseComponent,
    UploadMedicalAnalysisComponent,
    LabUploadMedicalAnalysisComponent,
    LabNavbarComponent,
    ClinicNavBarComponent,
    SearchUsersPipe,
    ViewUserProfileInClinicComponent,
    ChooseViewOptionClinicComponent,
    ViewBySearchINClinicComponent,
    ViewOptionsInLabComponent,
    ViewBySearchInlabComponent,
    ViewUserProfileInLabComponent,
    QrCodeScannerComponent,
    UserFilesComponent,
    ViewUserFilesInClinicComponent,
    ScannerInLabComponent,
    AnyUserViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    ZXingScannerModule,
    QRCodeModule,
    NgxScannerQrcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
