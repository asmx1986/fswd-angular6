import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg:FormGroup;
  minLongitud = 5;
  searchResults:string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
	
	this.fg = fb.group({
		nombre: ['', Validators.compose([
						Validators.required,
						this.nombreValidator,
						this.nombreValidatorParametrizable(this.minLongitud)
					])],
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
  	let elemNombre = <HTMLInputElement>document.getElementById('nombre');
	fromEvent(elemNombre, 'input')
		.pipe(
		  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
		  filter(text => text.length > 2),
		  debounceTime(120),
		  distinctUntilChanged(),
		  switchMap(() => ajax('/assets/datos.json'))
		).subscribe(ajaxResponse => {
	 		this.searchResults = ajaxResponse.response
				//filtramos client side solo para simplificar el ejemplo
	 			.filter(function(x){
	 				return x.toLowerCase().includes(elemNombre.value.toLowerCase());
 				});
		});
  }

  guardar(nombre:string, url:string):boolean {
  	let d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control: FormControl): { [s: string]: boolean } {
	let l = control.value.toString().trim().length;
	if (l > 0 && l < 5) {
		return {invalidNombre: true};
	}
    return null;
  }

  nombreValidatorParametrizable(minLong: number): ValidatorFn {
      return (control: FormControl): { [key: string]: boolean } | null => {
		  let l = control.value.toString().trim().length;
	      if (l > 0 && l < minLong) {
              return { 'minLongNombre': true };
          }
          return null;
      };
  }

}
