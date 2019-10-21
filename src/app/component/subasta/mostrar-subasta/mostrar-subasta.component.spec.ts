import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSubastaComponent } from './mostrar-subasta.component';

describe('MostrarSubastaComponent', () => {
  let component: MostrarSubastaComponent;
  let fixture: ComponentFixture<MostrarSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
