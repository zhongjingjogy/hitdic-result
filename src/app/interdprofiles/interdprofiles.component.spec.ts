import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterdprofilesComponent } from './interdprofiles.component';

describe('InterdprofilesComponent', () => {
  let component: InterdprofilesComponent;
  let fixture: ComponentFixture<InterdprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterdprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterdprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
