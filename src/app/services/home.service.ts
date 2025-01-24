import { environment } from "./../environments/environment-development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IClienteRequest } from "../interfaces/I-clienteRequest";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  clienteBaseUrl = environment.clienteBaseUrl;

  constructor(private http: HttpClient) {}
  /**
   * Metodo per ottenere tutti i clienti in forma paginata.
   * @param page - Numero di pagina (default: 0)
   * @param size - Dimensione della pagina (default: 10)
   * @param sortBy - Campo per ordinare i risultati (default: "id")
   * @returns Observable contenente la risposta con i dati paginati.
   */
  getAllClienti(page: number = 0, size: number = 10, sortBy: string = "id"): Observable<any> {
    const url = `${this.clienteBaseUrl}/paged?page=${page}&size=${size}&sortBy=${sortBy}`;
    return this.http.get(url);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.clienteBaseUrl}/${id}`);
  }

  createCliente(clienteRequest: IClienteRequest): Observable<any> {
    return this.http.post(`${this.clienteBaseUrl}`, clienteRequest); // Rimosso '/save'
  }
}
