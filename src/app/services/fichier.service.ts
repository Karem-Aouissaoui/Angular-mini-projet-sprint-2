import { Injectable } from '@angular/core';
import { Fichier } from '../model/fichier.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Type } from '../model/type.model';
import { AuthService } from './auth.service';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class FichierService {
  
  apiURL: string = 'http://localhost:8090/fichiers/api';
  
  fichiers : Fichier[];
  
  
  constructor(private http : HttpClient,
              public authService : AuthService) {
    
   }

   listeFichiers(): Observable<Fichier[]>  {
     let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt});
     return this.http.get<Fichier[]>(this.apiURL+"/all", {headers:httpHeaders});
   }

   ajouterFichier(fichier: Fichier){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.post<Fichier>(this.apiURL, fichier, {headers:httpHeaders});
   }

   supprimerFichier(id : number){
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.delete(url, {headers:httpHeaders});
   }

  
    consulterFichier(id:number): Observable<Fichier>{
      const url = `${this.apiURL}/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.get<Fichier>(url, {headers:httpHeaders});
    }

   
    updateFichier(f : Fichier) : Observable<Fichier>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.put<Fichier>(this.apiURL, f, {headers:httpHeaders});
    }

    listeTypes():Observable<Type[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.get<Type[]>(`${this.apiURL}/types`, {headers:httpHeaders});
    }

    consulterType(id : number) : Observable<Type>{
      console.log(`${this.apiURL}/types/${id}`);
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.get<Type>(`${this.apiURL}/types/${id}`, {headers:httpHeaders});
    }

    ajouterType(type : Type){
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt});
      return this.http.post<Type>(`${this.apiURL}/types`, type, {headers:httpHeaders});
    }
}
