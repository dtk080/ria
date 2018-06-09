import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFileComponent } from './drive-file.component';

describe('DriveFileComponent', () => {
  let component: DriveFileComponent;
  let fixture: ComponentFixture<DriveFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
