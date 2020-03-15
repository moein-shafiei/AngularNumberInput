import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInputNumberComponent } from './angular-input-number.component';

describe('AngularInputNumberComponent', () => {
  let component: AngularInputNumberComponent;
  let fixture: ComponentFixture<AngularInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
