import { iComune } from "./comune";

export interface iIndirizzo {
  id: number;
  via: string;
  civico: string;
  localita: string;
  cap: string;
  comune: iComune;
}
