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

@NgModule({
  declarations: [
    AppComponent,
    FichiersComponent,
    AddFichierComponent,
    UpdateFichierComponent,
    TypesComponent,
    AddTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
