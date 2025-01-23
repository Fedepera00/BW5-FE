import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Cliente } from "../interfaces/cliente";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private readonly baseUrl = "http://localhost:8080/api/cliente";

  constructor(private http: HttpClient) {}

  /**
   * Metodo per recuperare tutti i clienti.
   * Gestisce la risposta paginata del backend ed estrae solo il contenuto.
   *
   * @param page Numero della pagina (default: 0)
   * @param size Numero di elementi per pagina (default: 10)
   * @param sortBy Campo per ordinare i risultati (default: "id")
   * @returns Observable<Cliente[]> Lista di clienti
   */
  getAllClienti(page: number = 0, size: number = 10, sortBy: string = "id"): Observable<Cliente[]> {
    const url = `${this.baseUrl}/paged?page=${page}&size=${size}&sortBy=${sortBy}`;
    return this.http.get<{ content: Cliente[] }>(url).pipe(
      tap((response) => console.log("Risposta ricevuta dal backend:", response)), // Per il debug
      map((response) => response.content) // Estrae l'array di clienti
    );
  }
}
