import { Component, OnInit } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { Type } from '../model/type.model';
import { FichierService } from '../services/fichier.service';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-add-fichier',
  templateUrl: './add-fichier.component.html',
  styleUrls: ['./add-fichier.component.css']
})
export class AddFichierComponent implements OnInit {

  newIdType : number;
  newType = new Type();
  newFichier = new Fichier();
  types : Type[];

  constructor(private fichierService : FichierService,
              private router : Router) { }


  addFichier(){
    this.newType = this.types.find( type => type.idType == this.newIdType);
    
    this.newFichier.type = this.newType; 

    if(this.newFichier.type != undefined){
      this.fichierService.ajouterFichier(this.newFichier).subscribe(fich => {
        console.log(fich);
      });
      this.router.navigate(['fichiers']);
    }
      else
        console.log("insertion problem");
  }

  ngOnInit(): void {
    this.fichierService.listeTypes().subscribe(t => {
      console.log(t);
      this.types = t;
    });
  }


}
