import { Directive, OnInit, OnDestroy } from '@angular/core';
// fin i18n
@Directive({ selector: '[appEspiame]' })
export class EspiameDirective implements OnInit, OnDestroy {
  static nextId = 0;
  log = (msg: string) => console.log(`Evento #${EspiameDirective.nextId++} ${msg}`);
  ngOnInit() { this.log(`########******** onInit`); }
  ngOnDestroy() { this.log(`########******** onDestroy`); }
}
