import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoItemComponent } from './contrato-item.component';

describe('ContratoItemComponent', () => {
  let component: ContratoItemComponent;
  let fixture: ComponentFixture<ContratoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
