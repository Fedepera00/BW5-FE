import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { HomeService } from "../../services/home.service";
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
      logoAziendale: ["", Validators.required],
      indirizziIds: this.fb.array([]) // FormArray per gli indirizzi
    });
  }

  get formControls() {
    return this.clienteForm.controls;
  }

  get indirizziControls() {
    return this.clienteForm.get("indirizziIds") as FormArray;
  }

  addIndirizzo(): void {
    this.indirizziControls.push(
      this.fb.group({
        id: ["", [Validators.required]]
      })
    );
  }

  removeIndirizzo(index: number): void {
    this.indirizziControls.removeAt(index);
  }

  createCliente(): void {
    if (this.clienteForm.valid) {
      const formValue = this.clienteForm.value;

      // Trasformiamo l'array di oggetti indirizzi in un array di soli ID
      formValue.indirizziIds = formValue.indirizziIds.map((indirizzo: any) => indirizzo.id);

      console.log("Form inviato:", formValue);

      this.homeService.createCliente(formValue).subscribe(
        (response) => {
          console.log("Cliente creato con successo:", response);
          this.clienteError = null;
        },
        (error) => {
          console.error("Errore durante la creazione:", error);
          this.clienteError = error.error?.message || "Errore durante la creazione del cliente.";
        }
      );
    } else {
      this.clienteError = "Compila tutti i campi obbligatori.";
    }
  }
}
