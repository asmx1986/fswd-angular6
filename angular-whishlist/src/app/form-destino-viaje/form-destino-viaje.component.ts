import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg:FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
	
	this.fg = fb.group({
		nombre: ['', Validators.required],
		url: ['']
	});
	
	this.fg.valueChanges.subscribe(
		(form: any) => {
			console.log('form cambió:', form);
		}
	);
	
	this.fg.controls['nombre'].valueChanges.subscribe(
		(value: string) => {
			console.log('nombre cambió:', value);
		}
	);
  }

  ngOnInit() {
  }

  guardar(nombre:string, url:string):boolean {
  	let d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

}
