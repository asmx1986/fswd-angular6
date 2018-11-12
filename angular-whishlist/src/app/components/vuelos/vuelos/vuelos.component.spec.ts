import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosComponent } from './vuelos.component';

describe('VuelosComponent', () => {
  let component: VuelosComponent;
  let fixture: ComponentFixture<VuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
