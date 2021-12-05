import { Injectable } from '@angular/core';
import { Type } from '../model/type.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  apiURL: string = 'http://localhost:8090/fichiers/api/types';

  types : Type[];

  constructor(private http : HttpClient) { }

  listeTypes():Observable<Type[]>{
    return this.http.get<Type[]>(this.apiURL);
  }

  ajouterType(type : Type){
    return this.http.post<Type>(this.apiURL, type, httpOptions);
  }

}
