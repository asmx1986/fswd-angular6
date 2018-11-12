import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasListadoComponent } from './reservas-listado.component';

describe('ReservasListadoComponent', () => {
  let component: ReservasListadoComponent;
  let fixture: ComponentFixture<ReservasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
