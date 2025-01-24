import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TipoCliente } from "../../enums/tipo-cliente";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-create-cliente",
  templateUrl: "./create-cliente.component.html",
  styleUrls: ["./create-cliente.component.scss"],
})
export class CreateClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  tipoClienti = Object.values(TipoCliente);
  clienteError: string | null = null;

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      ragioneSociale: ["", Validators.required],
      partitaIva: ["", Validators.required],
      dataInserimento: ["", Validators.required],
      dataUltimoContatto: ["", Validators.required],
      fatturatoAnnuale: ["", [Validators.required, Validators.min(0)]],
      pec: ["", [Validators.required, Validators.email]],
      telefono: ["", Validators.required],
      tipoCliente: ["", Validators.required],
      emailContatto: ["", [Validators.required, Validators.email]],
      nomeContatto: ["", Validators.required],
      cognomeContatto: ["", Validators.required],
      telefonoContatto: ["", Validators.required],

      indirizzi: ["", Validators.required], // Potrebbe essere un array complesso
    });
  }

  get formControls() {
    return this.clienteForm.controls;
  }

  createCliente(): void {
    if (this.clienteForm.valid) {
      console.log("Form submitted:", this.clienteForm.value);
      this.homeService.createCliente(this.clienteForm.value).subscribe(
        (response) => {
          console.log("Cliente creato:", response);
          this.clienteError = null;
        },
        (error) => {
          console.error("Errore durante la creazione:", error);
          this.clienteError = "Errore durante la creazione del cliente.";
        }
      );
    } else {
      this.clienteError = "Compila tutti i campi obbligatori.";
    }
  }
}
