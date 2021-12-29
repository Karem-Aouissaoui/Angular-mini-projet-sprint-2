import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFichierComponent } from './add-fichier/add-fichier.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { FichierGuard } from './fichier.guard';
import { FichiersComponent } from './fichiers/fichiers.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UpdateFichierComponent } from './update-fichier/update-fichier.component';
const routes: Routes = [
  {path: "fichiers", component : FichiersComponent},
  {path: "add-fichier", component : AddFichierComponent, canActivate:[FichierGuard]},
  {path: "add-type", component : AddTypeComponent, canActivate:[FichierGuard]},
  {path: "", redirectTo:"fichiers", pathMatch: "full"},
  {path: "updateFichier/:id", component: UpdateFichierComponent, canActivate:[FichierGuard]},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "login", component: LoginComponent},
  {path: "app-forbidden", component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
