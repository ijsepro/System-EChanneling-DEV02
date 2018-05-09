import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



import {HomeComponent} from './view/home/home.component';
import {AdminHomeComponent} from './view/admin-home/admin-home.component';
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
    path: 'updateDoctor',
    component: ModifyDoctorComponent
  },
  {
    path: 'test',
    component: TestComponent
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
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class  AppRoutingModule {
}
