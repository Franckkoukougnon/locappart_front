// appartement.model.ts

import {Categorie} from "./categorie.model";
import {Bailleur} from "./bailleur.model";
import {Ville} from "./ville.model";

export interface Appartement {
  id: number;
  name: string;
  loyer: number;
  description: string;
  imageUrl: string | undefined;
  imageUrl2: string | undefined;
  imageUrl3: string | undefined;
  nbSallesDeBain: number;
  nbChambres: number;
  categorie: Categorie;
  bailleur: Bailleur;
  ville : Ville;



}
