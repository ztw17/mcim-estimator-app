import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorComponent } from './estimator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EstimateDetailsContainerComponent } from '../container/estimate-details-container.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('EstimatorComponent', () => {
  let component: EstimatorComponent;
  let fixture: ComponentFixture<EstimatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatStepperModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule
      ],
      declarations: [EstimatorComponent, EstimateDetailsContainerComponent],
    });
    fixture = TestBed.createComponent(EstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
