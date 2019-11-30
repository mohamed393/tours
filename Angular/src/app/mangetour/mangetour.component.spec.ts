import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangetourComponent } from './mangetour.component';

describe('MangetourComponent', () => {
  let component: MangetourComponent;
  let fixture: ComponentFixture<MangetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
