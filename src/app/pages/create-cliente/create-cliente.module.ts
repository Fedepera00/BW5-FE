import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { CreateClienteRoutingModule } from "./create-cliente-routing.module";
import { CreateClienteComponent } from "./create-cliente.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CreateClienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    CreateClienteRoutingModule,
    MatIconModule
  ]
})
export class CreateClienteModule {}
