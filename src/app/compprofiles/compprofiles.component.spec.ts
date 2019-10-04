import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompprofilesComponent } from './compprofiles.component';

describe('CompprofilesComponent', () => {
  let component: CompprofilesComponent;
  let fixture: ComponentFixture<CompprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
