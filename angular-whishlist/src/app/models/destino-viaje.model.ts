export class DestinoViaje {
	selected:boolean;
	constructor(public nombre:string, public imagenUrl:string) {}
	setSelected(s:boolean){
	  this.selected = s;
	}
	isSelected(){
	  return this.selected;
    }
}