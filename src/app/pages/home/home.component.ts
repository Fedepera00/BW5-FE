import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { Cliente } from "../../interfaces/cliente";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  clienti: Cliente[] = []; // Array per salvare i clienti
  isLoading = false; // Flag per indicare se i dati sono in caricamento
  error: string | null = null; // Per gestire eventuali errori
  cliente!: Cliente;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // this.fetchClienti();
    this.getClientiById();
  }

  getClientiById() {
    this.homeService.getById(1).subscribe((response) => (this.cliente = response));
  }

  // Metodo per recuperare i clienti
  fetchClienti(): void {
    this.isLoading = true;
    this.error = null;

    this.homeService.getAllClienti().subscribe(
      (data) => {
        this.clienti = data;
        this.isLoading = false;
      },
      (err) => {
        console.error("Errore nel recupero dei clienti:", err);
        this.error = "Errore durante il caricamento dei clienti.";
        this.isLoading = false;
      }
    );
  }
}
