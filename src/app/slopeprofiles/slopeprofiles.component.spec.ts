import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopeprofilesComponent } from './slopeprofiles.component';

describe('SlopeprofilesComponent', () => {
  let component: SlopeprofilesComponent;
  let fixture: ComponentFixture<SlopeprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlopeprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlopeprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
