import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCambioCuentaComponent } from './listar-cambio-cuenta.component';

describe('ListarCambioCuentaComponent', () => {
  let component: ListarCambioCuentaComponent;
  let fixture: ComponentFixture<ListarCambioCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCambioCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCambioCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
