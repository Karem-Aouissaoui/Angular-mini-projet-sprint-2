import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styles: [
  ]
})
export class AddTypeComponent implements OnInit {

  newType = new Type();

  constructor(private fichierService : FichierService,
              private router : Router) { }

  addType(){
    this.fichierService.ajouterType(this.newType).subscribe(t => {
      console.log(t);
    });
    this.router.navigate(['fichiers']);
  }

  ngOnInit(): void {
  }

}
