import { Injectable } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '../model/type.model';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class FichierService {
  
  apiURL: string = 'http://localhost:8090/fichiers/api';
  
  fichiers : Fichier[];
  
  
  constructor(private http : HttpClient) {
    
   }

   listeFichiers(): Observable<Fichier[]>  {
     return this.http.get<Fichier[]>(this.apiURL);
   }

   ajouterFichier(fichier: Fichier){
    return this.http.post<Fichier>(this.apiURL, fichier, httpOptions);
   }

   supprimerFichier(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
   }

  
   consulterFichier(id:number): Observable<Fichier>{
      const url = `${this.apiURL}/${id}` ;
      return this.http.get<Fichier>(url);
    }

   
    updateFichier(f : Fichier) : Observable<Fichier>{
      return this.http.put<Fichier>(this.apiURL, f, httpOptions);
    }

    listeTypes():Observable<Type[]>{
      return this.http.get<Type[]>(`${this.apiURL}/types`);
    }

    ajouterType(type : Type){
      return this.http.post<Type>(`${this.apiURL}/types`, type, httpOptions);
    }
}
