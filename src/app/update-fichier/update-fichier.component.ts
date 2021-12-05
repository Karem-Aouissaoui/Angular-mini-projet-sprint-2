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
  currentFichier = new Fichier();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private fichierService: FichierService) {  }
  
  types : Type[];
  ngOnInit(): void {
    this.fichierService.consulterFichier(this.activatedRoute.snapshot.params.id)
    .subscribe(f => { 
      this.currentFichier = f;
      console.log(this.currentFichier); 
    });
    this.fichierService.listeTypes().subscribe(t => {
      this.types = t;
    });
  }
  updateFichier(){ 
    this.fichierService.updateFichier(this.currentFichier).subscribe(f => {
      this.router.navigate(['fichiers']);
    }, (error) => { 
      alert("Problème lors de la modification !");
      console.log(error);
    });
    
  }

}
