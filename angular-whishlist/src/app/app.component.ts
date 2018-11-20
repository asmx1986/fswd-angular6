import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-whishlist';
  time = new Observable(observer => {
	setInterval(() => observer.next(new Date().toString()), 1000);
    return null;
  });

  constructor(private translate: TranslateService) {
    console.log('***************** get translation');
    translate.getTranslation('en').subscribe(x => console.log('x: ' + JSON.stringify(x)));
    translate.setDefaultLang('es');
  }

  destinoAgregado(d) {
  	//alert(d.nombre);
  }
}
