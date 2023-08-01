import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateDetailsComponent } from './estimate-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

describe('EstimateDetailsComponent', () => {
  let component: EstimateDetailsComponent;
  let fixture: ComponentFixture<EstimateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        FormsModule
      ],
      declarations: [EstimateDetailsComponent]
    });
    fixture = TestBed.createComponent(EstimateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
