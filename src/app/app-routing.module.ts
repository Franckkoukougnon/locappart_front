import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppartementComponent } from './component/appartement/appartement.component';

import { AppartementDetailsComponent } from './component/appartement-details/appartement-details.component';
import { AddAppartComponent } from './component/add-appart/add-appart.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthGuardService } from './services/auth/auth.service';
import { AdminService } from './services/admin/admin.service';
import { WhistlistComponent } from './component/whistlist/whistlist.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegisterComponent } from './component/register/register.component';
import { BailleurComponent } from './component/bailleur/bailleur.component';
import { AddBailleurComponent } from './component/add-bailleur/add-bailleur.component';
import { AddVilleComponent } from './component/add-ville/add-ville.component';
import { FavorisComponent } from './component/favoris/favoris.component';
import { AddCategorieComponent } from './component/add-categorie/add-categorie.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'favoris',
    component: FavorisComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminService],
  },
  {
    path: 'appartement',
    component: AppartementComponent,
    canActivateChild: [AuthGuardService],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'addAppart',
    component: AddAppartComponent,
    canActivateChild: [AuthGuardService],
  },
  {
    path: 'addTypeAppart',
    component: AddCategorieComponent,
    canActivateChild: [AuthGuardService],
  },
  {
    path: 'addVille',
    component: AddVilleComponent,
    canActivateChild: [AuthGuardService],
  },
  {
    path: 'addBailleur',
    component: AddBailleurComponent,
    canActivateChild: [AuthGuardService],
  },
  {
    path: 'detail/:id',
    component: AppartementDetailsComponent,
    canActivateChild: [AuthGuardService],
  },
  // ... autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
