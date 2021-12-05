import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFichierComponent } from './add-fichier/add-fichier.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { FichiersComponent } from './fichiers/fichiers.component';
import { UpdateFichierComponent } from './update-fichier/update-fichier.component';
const routes: Routes = [
  {path: "fichiers", component : FichiersComponent},
  {path: "add-fichier", component : AddFichierComponent},
  {path: "add-type", component : AddTypeComponent},
  {path: "", redirectTo:"fichiers", pathMatch: "full"},
  {path: "updateFichier/:id", component: UpdateFichierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
