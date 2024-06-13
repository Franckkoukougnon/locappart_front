import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AppartementComponent } from './component/appartement/appartement.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppartementDetailsComponent } from './component/appartement-details/appartement-details.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddAppartComponent } from './component/add-appart/add-appart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { WhistlistComponent } from './component/whistlist/whistlist.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import {MatInputModule} from "@angular/material/input";
import {FailedModalComponent} from "./component/modal/failed-modal/failed-modal.component";
import { RegisterComponent } from './component/register/register.component';
import {SuccessModalComponent} from "./component/modal/success-modal/success-modal.component";
import { BailleurComponent } from './component/bailleur/bailleur.component';
import { AddBailleurComponent } from './component/add-bailleur/add-bailleur.component';
import { BailleurModalComponent } from './component/modal/bailleur-modal/bailleur-modal.component';
import { AddVilleComponent } from './component/add-ville/add-ville.component';
import { VilleModalComponent } from './component/modal/ville-modal/ville-modal.component';
import { DeleteConfirmationModalComponentComponent } from './component/modal/delete-confirmation-modal-component/delete-confirmation-modal-component.component';
import { FavorisComponent } from './component/favoris/favoris.component';



@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    AppartementComponent,
    DashboardComponent,
    HomeComponent,
    AppartementDetailsComponent,
    NavbarComponent,
    AddAppartComponent,
    SignupComponent,
    WhistlistComponent,
    WelcomeComponent,
    FailedModalComponent,
    RegisterComponent,
    SuccessModalComponent,
    BailleurComponent,
    AddBailleurComponent,
    BailleurModalComponent,
    AddVilleComponent,
    VilleModalComponent,
    DeleteConfirmationModalComponentComponent,
    FavorisComponent,





  ],
  imports: [
    //Angular-Material

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,



    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
