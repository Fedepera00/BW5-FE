import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HomeService } from "../../services/home.service"; // Questo è il servizio per le chiamate API
import { TipoCliente } from "../../enums/tipo-cliente";

@Component({
  selector: "app-create-cliente",
  templateUrl: "./create-cliente.component.html",
  styleUrls: ["./create-cliente.component.scss"],
})
export class CreateClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  clienteError: string | null = null;
  tipoClienti = TipoCliente; // TipoCliente enum, adatta alle tue esigenze

  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.clienteForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      ragioneSociale: ["", [Validators.required]],
      partitaIva: ["", [Validators.required]],
      dataInserimento: ["", [Validators.required]],
      dataUltimoContatto: ["", [Validators.required]],
      fatturatoAnnuale: ["", [Validators.required, Validators.min(0)]],
      pec: ["", [Validators.required, Validators.email]],
      telefono: ["", [Validators.required]],
      emailContatto: ["", [Validators.required, Validators.email]],
      nomeContatto: ["", [Validators.required]],
      cognomeContatto: ["", [Validators.required]],
      telefonoContatto: ["", [Validators.required]],
      logoAziendale: ["", [Validators.required]],
      indirizziIds: ["", [Validators.required]], // Indirizzi da associare
      tipoCliente: ["", [Validators.required]],
    });
  }

  get formControls() {
    return this.clienteForm.controls;
  }

  createCliente(): void {
    if (this.clienteForm.valid) {
      const clienteRequest = this.clienteForm.value;
      this.homeService.createCliente(clienteRequest).subscribe(
        (response) => {
          this.router.navigate(["/home"]); // Dopo il salvataggio, vai alla home
        },
        (error) => {
          this.clienteError = "Errore durante la creazione del cliente. Riprova.";
          console.error("Errore durante la creazione cliente:", error);
        }
      );
    }
  }
}
