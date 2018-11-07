import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
	destinos:DestinoViaje[];
	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll():DestinoViaje[]{
	  return this.destinos;
    }
	getById(id:String):DestinoViaje{
	  return this.destinos.filter(function(d){return d.id.toString() == id;})[0];
    }
}