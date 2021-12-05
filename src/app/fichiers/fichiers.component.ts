import { Component, OnInit } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { FichierService } from '../services/fichier.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css']
})
export class FichiersComponent implements OnInit {
  fichiers : Fichier[];
  types : Type[];

  constructor(private fichierService : FichierService,
              private router : Router) {
    
   }

  supprimerFichier(f: Fichier){
    let conf = confirm("Etes-vous sûr ?");
    if(conf)
      this.fichierService.supprimerFichier(f.idFichier).subscribe(() => {
        console.log("fichier supprimé");
        this.SupprimerFichierDuTableau(f);
      });
      
  }
  
  SupprimerFichierDuTableau(f : Fichier){
    this.fichiers.forEach((cur, index) => {
      if(f.idFichier === cur.idFichier){
        this.fichiers.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.fichierService.listeFichiers().subscribe(fichs =>{
      console.log(fichs);
      this.fichiers = fichs;
    });
    this.fichierService.listeTypes().subscribe(t => {
      console.log(t);
      this.types = t;
    });
  }

}
