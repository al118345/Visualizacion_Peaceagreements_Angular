import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIbanComponent } from './crear-iban.component';

describe('CrearIbanComponent', () => {
  let component: CrearIbanComponent;
  let fixture: ComponentFixture<CrearIbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearIbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
