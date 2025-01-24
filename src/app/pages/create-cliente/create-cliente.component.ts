import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TipoCliente } from "../../enums/tipo-cliente";

@Component({
  selector: "app-create-cliente",
  templateUrl: "./create-cliente.component.html",
  styleUrls: ["./create-cliente.component.scss"]
})
export class CreateClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  tipoClienti = Object.values(TipoCliente);
  clienteError: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      ragioneSociale: ["", Validators.required],
      partitaIva: ["", Validators.required],
      fatturatoAnnuale: ["", Validators.required],
      tipoCliente: ["", Validators.required]
    });
  }

  get formControls() {
    return this.clienteForm.controls;
  }

  createCliente(): void {
    if (this.clienteForm.valid) {
      console.log("Form submitted:", this.clienteForm.value);
      this.clienteError = null;
    } else {
      this.clienteError = "Compila tutti i campi obbligatori.";
    }
  }
}
