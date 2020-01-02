import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadosInformacionComponent } from './tratados-informacion.component';

describe('TratadosInformacionComponent', () => {
  let component: TratadosInformacionComponent;
  let fixture: ComponentFixture<TratadosInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadosInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
