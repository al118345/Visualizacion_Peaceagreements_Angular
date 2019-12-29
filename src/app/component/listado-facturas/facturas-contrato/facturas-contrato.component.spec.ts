import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasContratoComponent } from './facturas-contrato.component';

describe('FacturasContratoComponent', () => {
  let component: FacturasContratoComponent;
  let fixture: ComponentFixture<FacturasContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
