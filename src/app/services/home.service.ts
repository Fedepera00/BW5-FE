import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private baseUrl = "http://localhost:8080/api/cliente"; // Endpoint del backend
  private token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTczNzY2MzU3OCwiZXhwIjoxNzM3NjY3MTc4fQ.L1gUAc8GD-RUm-2YGv4CTqGwqQJUILD4vxFMfOaGq-s"; // Inserisci qui il token hardcoded

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`, // Aggiunge il token hardcoded agli header
    });

    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }
}
