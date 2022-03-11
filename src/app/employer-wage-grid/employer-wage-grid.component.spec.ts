import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerWageGridComponent } from './employer-wage-grid.component';

describe('EmployerWageGridComponent', () => {
  let component: EmployerWageGridComponent;
  let fixture: ComponentFixture<EmployerWageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerWageGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerWageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
