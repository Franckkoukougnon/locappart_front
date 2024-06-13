import {Appartement} from "./appartement.model";


export interface Bailleur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  appartements: Appartement[];
}
