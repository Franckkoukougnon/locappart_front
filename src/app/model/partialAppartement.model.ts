import { Categorie } from "./categorie.model";

export interface PartialAppartement {
    id?: number;
    name?: string;
    currentPrice?: number;
    description?: string;
    imageUrl?: string | undefined;
    imageUrl2?: string | undefined;
    imageUrl3?: string | undefined;
    nbSallesDeBain?: number;
    nbChambres?: number;
    categorie?: Categorie;
  }
  