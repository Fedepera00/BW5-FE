import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClienteComponent } from './create-cliente.component';

const routes: Routes = [{ path: '', component: CreateClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateClienteRoutingModule { }
