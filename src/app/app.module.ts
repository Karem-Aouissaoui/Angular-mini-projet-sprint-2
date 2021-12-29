import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichiersComponent } from './fichiers/fichiers.component';
import { AddFichierComponent } from './add-fichier/add-fichier.component';
import { FormsModule } from '@angular/forms';
import { UpdateFichierComponent } from './update-fichier/update-fichier.component';
import { HttpClientModule } from '@angular/common/http';
import { TypesComponent } from './types/types.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    FichiersComponent,
    AddFichierComponent,
    UpdateFichierComponent,
    TypesComponent,
    AddTypeComponent,
    RechercheParTypeComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParNomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
