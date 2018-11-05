export class DestinoViaje {
	selected:boolean;
	servicios:string[];
	constructor(public nombre:string, public imagenUrl:string) {
       this.servicios = ['pileta', 'desayuno'];
	}
	setSelected(s:boolean){
	  this.selected = s;
	}
	isSelected(){
	  return this.selected;
    }
}