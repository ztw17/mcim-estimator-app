import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateDetailsComponent } from './estimate-details.component';

describe('EstimateDetailsComponent', () => {
  let component: EstimateDetailsComponent;
  let fixture: ComponentFixture<EstimateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
