import { iProvincia } from "./provincia";

export interface iComune {
  id: number;
  codiceProvincia: string;
  progressivo: string;
  denominazione: string;
  provincia: iProvincia;
}
