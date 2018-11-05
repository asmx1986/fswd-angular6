import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  constructor() {
  	this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {
  }

  guardar(nombre:string, url:string):boolean {
  	let d = new DestinoViaje(nombre, url);
    this.destinos.push(d);
    this.onItemAdded.emit(d);
    return false;
  }

  elegido(e:DestinoViaje) {
    this.destinos.forEach(x => x.setSelected(false));
    e.setSelected(true);
  }
}
