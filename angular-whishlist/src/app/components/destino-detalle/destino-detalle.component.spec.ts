import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoDetalleComponent } from './destino-detalle.component';

describe('DestinoDetalleComponent', () => {
  let component: DestinoDetalleComponent;
  let fixture: ComponentFixture<DestinoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
