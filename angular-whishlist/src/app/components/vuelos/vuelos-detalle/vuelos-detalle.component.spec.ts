import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosDetalleComponent } from './vuelos-detalle.component';

describe('VuelosDetalleComponent', () => {
  let component: VuelosDetalleComponent;
  let fixture: ComponentFixture<VuelosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuelosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
