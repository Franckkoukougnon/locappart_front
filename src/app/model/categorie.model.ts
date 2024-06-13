// categorie.model.ts

import { Appartement } from "./appartement.model";


  
  export interface Categorie {
    id: number;
    name: string;
    appartements: Appartement[];
  

  }
  