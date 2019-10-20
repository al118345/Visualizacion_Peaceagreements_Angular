import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaItemComponent } from './subasta-item.component';

describe('SubastaItemComponent', () => {
  let component: SubastaItemComponent;
  let fixture: ComponentFixture<SubastaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
