import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerWageChangeComponent } from './employer-wage-change.component';

describe('EmployerWageChangeComponent', () => {
  let component: EmployerWageChangeComponent;
  let fixture: ComponentFixture<EmployerWageChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerWageChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerWageChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
