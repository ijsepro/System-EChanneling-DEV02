import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent} from './view/home/home.component';
import {AdminHomeComponent} from './view/admin-home/admin-home.component';
import {HomeHedderComponent} from './view/home-hedder/home-hedder.component';
import {HomeFooterComponent} from './view/home-footer/home-footer.component';
import {AdminHomeHedderComponent} from './view/admin-home-hedder/admin-home-hedder.component';
import {AdminHomeFooterComponent} from './view/admin-home-footer/admin-home-footer.component';
import {LoginComponent} from './view/login/login.component';
import {AccountSettingComponent} from './view/account-setting/account-setting.component';
import {AboutComponent } from './view/about/about.component';
import {AddDoctorComponent } from './view/add-doctor/add-doctor.component';
import {ManageHospitalComponent} from './view/add-hospital/manage-hospital.component';
import {AddNewScheduleComponent} from './view/add-schedule/add-new-schedule.component';
import {ModifyScheduleComponent} from './view/modify-schedule/modify-schedule.component';
import {RemoveHospitalComponent} from './view/remove-hospital/remove-hospital.component';
import {RemoveScheduleComponent} from './view/remove-schedule/remove-schedule.component';
import {DeleteDoctorComponent} from './view/remove-doctor/delete-doctor.component';
import {AddSpecialtyComponent} from './view/add-specialty/add-specialty.component';
import { RemoveSpecialtyComponent } from './view/remove-specialty/remove-specialty.component';

const routes: Routes = [
  {
    path: 'adminHome',
    component: AdminHomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'accountSetting',
    component: AccountSettingComponent
  },
  {
    path: 'addDoctor',
    component: AddDoctorComponent
  },
  {
    path: 'addHospital',
    component: ManageHospitalComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'addSchedule',
    component: AddNewScheduleComponent
  },
  {
    path: 'deleteHospital',
    component: RemoveHospitalComponent
  },
  {
    path: 'updateSchedule',
    component: ModifyScheduleComponent
  },
  {
    path: 'deleteSchedule',
    component: RemoveScheduleComponent
  },
  {
    path: 'deleteDoctor',
    component: DeleteDoctorComponent
  },
  {
    path: 'addSpecialty',
    component: AddSpecialtyComponent
  },
  {
    path: 'removeSpecialty',
    component: RemoveSpecialtyComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    HomeHedderComponent,
    HomeFooterComponent,
    AdminHomeHedderComponent,
    AdminHomeFooterComponent,
    LoginComponent,
    AccountSettingComponent,
    AboutComponent,
    AddDoctorComponent,
    ManageHospitalComponent,
    RemoveHospitalComponent,
    RemoveScheduleComponent,
    DeleteDoctorComponent,
    AddNewScheduleComponent,
    ModifyScheduleComponent,
    AddSpecialtyComponent,
    RemoveSpecialtyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
