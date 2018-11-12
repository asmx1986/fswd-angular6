import {Injectable} from '@angular/core';
import { DestinoViaje } from './destino-viaje.model';
import { Store } from '@ngrx/store';
import {
    NuevoDestinoAction,
    ElegidoFavoritoAction
  } from './destinos-viajes-state.model';
import {AppState} from './../app.module';

@Injectable()
export class DestinosApiClient {
  destinos: DestinoViaje[] = [];

  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.destinos)
      .subscribe((data) => {
        console.log('destinos sub store');
        console.log(data);
        this.destinos = data.items;
      });
    this.store
      .subscribe((data) => {
        console.log('all store');
        console.log(data);
      });
  }

  add(d: DestinoViaje) {
    // aqui incovariamos al servidor
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  getById(id: String): DestinoViaje {
    return this.destinos.filter(function(d) { return d.id.toString() === id; })[0];
  }

    getAll(): DestinoViaje[] {
      return this.destinos;
  }
    elegir(d: DestinoViaje) {
      // aqui incovariamos al servidor
      this.store.dispatch(new ElegidoFavoritoAction(d));
    }
}
