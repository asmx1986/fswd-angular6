import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoViajeComponent } from './destino-viaje.component';

describe('DestinoViajeComponent', () => {
  let component: DestinoViajeComponent;
  let fixture: ComponentFixture<DestinoViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
