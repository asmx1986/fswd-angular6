import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosMainComponent } from './vuelos-main.component';

describe('VuelosMainComponent', () => {
  let component: VuelosMainComponent;
  let fixture: ComponentFixture<VuelosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuelosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
