import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosMasInfoComponent } from './vuelos-mas-info.component';

describe('VuelosMasInfoComponent', () => {
  let component: VuelosMasInfoComponent;
  let fixture: ComponentFixture<VuelosMasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuelosMasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosMasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
