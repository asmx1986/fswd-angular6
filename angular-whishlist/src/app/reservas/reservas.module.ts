import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasListadoComponent } from './reservas-listado/reservas-listado.component';
import { ReservasDetalleComponent } from './reservas-detalle/reservas-detalle.component';
import { ReservasApiClientService } from './reservas-api-client.service';

@NgModule({
  imports: [
    CommonModule,
    ReservasRoutingModule
  ],
  providers: [
    ReservasApiClientService
  ],
  declarations: [ReservasListadoComponent, ReservasDetalleComponent]
})
export class ReservasModule { }
