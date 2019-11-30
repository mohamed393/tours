import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetourComponent } from './onetour.component';

describe('OnetourComponent', () => {
  let component: OnetourComponent;
  let fixture: ComponentFixture<OnetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
