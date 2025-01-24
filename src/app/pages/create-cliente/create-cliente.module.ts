import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateClienteRoutingModule } from "./create-cliente-routing.module";
import { CreateClienteComponent } from "./create-cliente.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LoginRoutingModule } from "../login/login-routing.module";

@NgModule({
  declarations: [CreateClienteComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule, LoginRoutingModule],
})
export class CreateClienteModule {}
