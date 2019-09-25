import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFacturaComponent } from './ejemplo-factura.component';

describe('EjemploFacturaComponent', () => {
  let component: EjemploFacturaComponent;
  let fixture: ComponentFixture<EjemploFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
