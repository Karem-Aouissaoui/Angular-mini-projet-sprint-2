import { Component, OnInit } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { Type } from '../model/type.model';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {

  constructor(private fichierService : FichierService) { }

  types : Type[];
  fichiers : Fichier[];
  fichiersRecherche : Fichier[];
  idType : number;

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
      if(this.idType == cur.type.idType){
        console.log("cur = "+cur);
        this.fichiersRecherche.push(cur);
      }
    });
  }
}
