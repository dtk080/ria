import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFileComponent } from './google-file.component';

describe('GoogleFileComponent', () => {
  let component: GoogleFileComponent;
  let fixture: ComponentFixture<GoogleFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
