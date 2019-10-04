import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvergenceComponent } from './convergence.component';

describe('ConvergenceComponent', () => {
  let component: ConvergenceComponent;
  let fixture: ComponentFixture<ConvergenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvergenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
