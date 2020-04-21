import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { AppointmentComponent } from './components/appointment/appointment.component';


const routes: Routes = [
  { path : '', redirectTo:'home', pathMatch:'full'},
  { path : '', component: MenuComponent, children: [
    { path : 'accueil', component: HomeComponent},
    { path : 'medecins', component: DoctorsComponent},
    { path : 'medicaments', component: MedicinesComponent},
    { path : 'prescription', component: PrescriptionsComponent},
    { path : 'profil', component: ProfileComponent},
    { path : 'appointment', component: AppointmentComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
