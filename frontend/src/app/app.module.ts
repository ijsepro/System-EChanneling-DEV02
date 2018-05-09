
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppRoutingModule} from './app-routing.module';
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
import { TestComponent } from './view/test/test.component';
import {ModifyDoctorComponent} from './view/modify-doctor/modify-doctor.component';

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
    RemoveSpecialtyComponent,
    TestComponent,
    ModifyDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
