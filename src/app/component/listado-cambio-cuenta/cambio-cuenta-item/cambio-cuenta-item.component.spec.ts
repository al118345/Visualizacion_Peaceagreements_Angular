import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioCuentaItemComponent } from './cambio-cuenta-item.component';

describe('CambioCuentaItemComponent', () => {
  let component: CambioCuentaItemComponent;
  let fixture: ComponentFixture<CambioCuentaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCuentaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioCuentaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
