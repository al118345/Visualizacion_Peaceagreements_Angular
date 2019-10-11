import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarDatosComponent } from './completar-datos.component';

describe('CompletarDatosComponent', () => {
  let component: CompletarDatosComponent;
  let fixture: ComponentFixture<CompletarDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletarDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
