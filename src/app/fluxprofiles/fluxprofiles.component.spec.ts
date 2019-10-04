import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxprofilesComponent } from './fluxprofiles.component';

describe('FluxprofilesComponent', () => {
  let component: FluxprofilesComponent;
  let fixture: ComponentFixture<FluxprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
