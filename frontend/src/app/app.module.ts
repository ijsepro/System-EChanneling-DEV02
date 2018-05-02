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
import { AboutComponent } from './view/about/about.component';
import { AddDoctorComponent } from './view/add-doctor/add-doctor.component';


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
    path: 'about',
    component: AboutComponent
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
    AddDoctorComponent
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
