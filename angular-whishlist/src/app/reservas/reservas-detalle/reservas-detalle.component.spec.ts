import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasDetalleComponent } from './reservas-detalle.component';

describe('ReservasDetalleComponent', () => {
  let component: ReservasDetalleComponent;
  let fixture: ComponentFixture<ReservasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
