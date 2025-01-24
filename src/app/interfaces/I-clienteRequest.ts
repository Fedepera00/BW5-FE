import { TipoCliente } from "../enums/tipo-cliente";
import { iIndirizzo } from "./indirizzo";

export interface IClienteRequest {
  email: string;
  ragioneSociale: string;
  partitaIva: string;
  dataInserimento: string; // ISO string per LocalDate
  dataUltimoContatto: string; // ISO string per LocalDate
  fatturatoAnnuale: number;
  pec: string;
  telefono: string;
  emailContatto: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  logoAziendale: string;
  indirizzi: iIndirizzo[];
  tipoCliente: TipoCliente;
}
