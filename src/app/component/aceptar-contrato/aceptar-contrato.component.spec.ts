import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarContratoComponent } from './aceptar-contrato.component';

describe('AceptarContratoComponent', () => {
  let component: AceptarContratoComponent;
  let fixture: ComponentFixture<AceptarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
