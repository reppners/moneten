import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerWageConfigurationComponent } from './employer-wage-configuration.component';

describe('EmployerWageConfigurationComponent', () => {
  let component: EmployerWageConfigurationComponent;
  let fixture: ComponentFixture<EmployerWageConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerWageConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerWageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
