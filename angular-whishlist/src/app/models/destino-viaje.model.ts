import {v4 as uuid} from 'uuid';

export class DestinoViaje {
  selected: boolean;
  servicios: string[];
  id = uuid();
  public votes = 0;
  constructor(public nombre: string, public imagenUrl: string) {
       this.servicios = ['pileta', 'desayuno'];
  }
  setSelected(s: boolean) {
    this.selected = s;
  }
  isSelected() {
    return this.selected;
  }
  voteUp(): any {
    this.votes++;
  }
  voteDown(): any {
    this.votes--;
  }
}
