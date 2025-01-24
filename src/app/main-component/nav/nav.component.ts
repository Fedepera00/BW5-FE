import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: ".app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  selectedIndex = 0; // Valore predefinito (prima scheda)
  routes = ["/", "/login", "/home", "/create-cliente"]; // Percorsi associati alle schede

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ascolta i cambiamenti di navigazione per aggiornare l'indice della scheda
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const index = this.routes.indexOf(event.urlAfterRedirects);
        if (index !== -1) {
          this.selectedIndex = index; // Aggiorna la scheda attiva
        }
      }
    });
  }

  navigate(index: number): void {
    this.router.navigate([this.routes[index]]);
  }
}
