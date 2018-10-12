import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() {
  	this.destinos = [];
  }

  ngOnInit() {
  }

  guardar(nombre:string, url:string):boolean {
  	this.destinos.push(new DestinoViaje(nombre, url));
    return false;
  }

}
