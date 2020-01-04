import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoWebComponent } from './mundo-web.component';

describe('MundoWebComponent', () => {
  let component: MundoWebComponent;
  let fixture: ComponentFixture<MundoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
