import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import {AppState} from './../../app.module';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [ DestinosApiClient ]
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates:string[];

  constructor(
      private destinosApiClient:DestinosApiClient,
      private store: Store<AppState>
    ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
  }

  ngOnInit() {
    this.store.select(state => state.destinos.favorito)
      .subscribe(data => {
        const f = data;
        if (f != null) {
          this.updates.push('Se eligió: ' + f.nombre);
        }
      });
  }

  agregado(d:DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d:DestinoViaje) {
    this.destinosApiClient.elegir(d);
  }
}
