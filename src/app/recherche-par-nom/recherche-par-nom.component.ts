import { Component, OnInit } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  constructor(private fichierService : FichierService, private authService : AuthService) { }

  types : Type[];
  fichiers : Fichier[];
  fichiersRecherche : Fichier[];
  nomf : string;

  ngOnInit(): void {
    this.fichierService.listeTypes().subscribe( types =>{
      this.types = types;
      console.log(this.types);
    });

    this.fichierService.listeFichiers().subscribe(fichiers => {
      this.fichiers = fichiers;
      this.fichiersRecherche = fichiers;
      console.log(this.fichiers);
    });
    this.fichiersRecherche = this.fichiers;
  }

  onChange(){
    this.fichiersRecherche = [];
    this.fichiers.forEach((cur, index) => {
      if(cur.nomFichier.indexOf(this.nomf) >= 0){
        console.log("cur = "+cur);
        this.fichiersRecherche.push(cur);
      }
    });
  }

}
