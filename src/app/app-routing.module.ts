import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInfoComponent } from './register/medical-info/medical-info.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { EmergencyContactComponent } from './register/emergency-contact/emergency-contact.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './User/profile/profile.component';
import { FamilyHistoryComponent } from './User/family-history/family-history.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { UpdateInfoComponent } from './User/update-info/update-info.component';
import { PredictComponent } from './User/predict/predict.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomePageComponent},
  {path: 'register', component: SignUpComponent}, 
  {path:'medical_info',component:MedicalInfoComponent},
  {path:'emergency_Contact',component:EmergencyContactComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'familyHistory',component:FamilyHistoryComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'updateInfo',component:UpdateInfoComponent},
  {path:'predictDisease',component:PredictComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
