import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DestinoViaje } from './destino-viaje.model';

//ESTADO
export interface DestinosViajesState{
    items: DestinoViaje[];
    loading: boolean;
    favorito: DestinoViaje;
}

export const intializeDestinosViajesState = function(){
    return {
	    items: [],
	    loading: false,
	    favorito: null
    }
}

//ACCIONES
export enum DestinosViajesActionTypes {
  NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
  ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito'
}

export class NuevoDestinoAction implements Action {
  type = DestinosViajesActionTypes.NUEVO_DESTINO;
  constructor(public destino: DestinoViaje) {}
}

export class ElegidoFavoritoAction implements Action {
  type = DestinosViajesActionTypes.ELEGIDO_FAVORITO;
  constructor(public destino: DestinoViaje) {}
}

export type DestinosViajesActions = NuevoDestinoAction | ElegidoFavoritoAction;

//REDUCERS
export function reducerDestinosViajes(
	state:DestinosViajesState,
	action:DestinosViajesActions
) : DestinosViajesState {
	switch (action.type) {
		case DestinosViajesActionTypes.NUEVO_DESTINO: {
		  return {
		  		...state,
		  		items: [...state.items, (action as NuevoDestinoAction).destino ]
		  	};
		}
		case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
		    state.items.forEach(x => x.setSelected(false));
		    let fav:DestinoViaje = (action as ElegidoFavoritoAction).destino;
		    fav.setSelected(true);
		    return {
		    	...state,
		  		favorito: fav
		    };
		}
	}
	return state;
}

//EFFECTS
@Injectable()
export class DestinosViajesEffects {
  @Effect()
  nuevoAgregado$: Observable<Action> = this.actions$.pipe(
    ofType(DestinosViajesActionTypes.NUEVO_DESTINO),
  	map((action:NuevoDestinoAction) => new ElegidoFavoritoAction(action.destino))
  );

  constructor(private actions$: Actions) {}
}