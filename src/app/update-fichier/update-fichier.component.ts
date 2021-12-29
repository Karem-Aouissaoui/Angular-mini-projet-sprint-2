import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fichier } from '../model/fichier.model';
import { Type } from '../model/type.model';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-update-fichier',
  templateUrl: './update-fichier.component.html',
  styles: [
  ]
})
export class UpdateFichierComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private fichierService: FichierService) {  }
  
  tmp = new Type();
  currentFichier = new Fichier();
  fichiers : Fichier[];
  types : Type[];
  updatedType = new Type();
 

  ngOnInit(): void {
    /*
    this.fichierService.listeFichiers().subscribe(fichiers => {
      this.fichiers = fichiers;
      console.log(this.fichiers);
    });*/
    
    this.fichierService.consulterFichier(this.activatedRoute.snapshot.params.id)
    .subscribe( f => { 
      this.currentFichier = f;
      this.tmp = this.currentFichier.type;
      console.log("currentFichier");
      console.log(this.currentFichier); 
      console.log("tmp ");
      console.log(this.tmp);
    });

    this.fichierService.listeTypes().subscribe(t => {
      this.types = t;
    });
  }

  updateFichier(){ 
    this.updatedType = this.types.find(type => type.idType == this.tmp.idType);

    this.currentFichier.type = this.updatedType;
    
    this.fichierService.updateFichier(this.currentFichier).subscribe(f => {
      this.router.navigate(['fichiers']);
    }, (error) => { 
      alert("Problème lors de la modification !");
      console.log(error);
    });
    
  }

}
