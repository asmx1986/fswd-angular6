import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasListadoComponent } from './reservas-listado/reservas-listado.component';
import { ReservasDetalleComponent } from './reservas-detalle/reservas-detalle.component';

const routes: Routes = [
  { path: 'reservas',  component: ReservasListadoComponent },
  { path: 'reservas/:id',  component: ReservasDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
