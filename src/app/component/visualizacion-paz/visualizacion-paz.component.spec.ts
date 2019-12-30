import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionPazComponent } from './visualizacion-paz.component';

describe('VisualizacionPazComponent', () => {
  let component: VisualizacionPazComponent;
  let fixture: ComponentFixture<VisualizacionPazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionPazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionPazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
