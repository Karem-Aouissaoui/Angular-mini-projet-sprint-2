import { Type } from "./type.model";

export class Fichier {
    idFichier : number;
    nomFichier : string;
    dateCreation : Date;
    dateModification : Date;
    taille : number;
    type : Type;
}