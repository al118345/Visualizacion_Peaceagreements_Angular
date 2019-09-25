import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCambioCuentaComponent } from './listado-cambio-cuenta.component';

describe('ListadoCambioCuentaComponent', () => {
  let component: ListadoCambioCuentaComponent;
  let fixture: ComponentFixture<ListadoCambioCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCambioCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCambioCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
