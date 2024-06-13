import {Appartement} from "./appartement.model";

export interface Ville {
  id: number;
  nom: string;
  appartements: Appartement[];
}
