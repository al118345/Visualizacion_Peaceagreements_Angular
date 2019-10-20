import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSubastaComponent } from './listado-subasta.component';

describe('ListadoSubastaComponent', () => {
  let component: ListadoSubastaComponent;
  let fixture: ComponentFixture<ListadoSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
