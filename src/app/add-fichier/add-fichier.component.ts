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

  newFichier = new Fichier();
  t = new Type();
  
  types : Type[];
  constructor(private fichierService : FichierService,
              private router : Router) { }

  addFichier(){
    this.fichierService.ajouterFichier(this.newFichier)
    .subscribe(fich => {
      console.log(fich);
    });
    this.router.navigate(['fichiers']);
  }

  ngOnInit(): void {
    this.fichierService.listeTypes().subscribe(t => {
      console.log(t);
      this.types = t;
    });
  }


}
