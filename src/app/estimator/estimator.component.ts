import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EstimateModel } from '../models/estimate.model';
import { MatStepper } from '@angular/material/stepper';
import { Properties } from '../constants/properties';
import { Priorities } from '../constants/priorities';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { EstimateDetailsModel } from '../models/estimate-details.model';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;
  
  public firstFormGroup!: UntypedFormGroup;
  public secondFormGroup!: UntypedFormGroup;
  public model: EstimateModel = {} as EstimateModel;
  public estimate: EstimateModel = {} as EstimateModel;
  public properties = Properties;
  public priorities = Priorities;
  public selectedProperty!: '';
  public selectedPriority!: '';
  public totalCost: number = 0;
  public estimateDetails: EstimateDetailsModel[] = [];
  
  constructor (
    private _formBuilder: UntypedFormBuilder,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  public firstNext(): void {
    this.estimate.firstName = this.model.firstName;
    this.estimate.lastName = this.model.lastName;
    this.estimate.property = this.selectedProperty;
    this.estimate.priority = this.selectedPriority;
  }

  public secondNext(): void {
    this.calculateTotal();
  }

  public firstValidate(): boolean {
    const firstName = _.trim(this.model.firstName);
    const lastName = _.trim(this.model.firstName);

    return (!!firstName && !!lastName && !!this.selectedProperty && !!this.selectedPriority);
  }

  public goHome(): void {
    this.router.navigateByUrl('/');
  }

  private calculateTotal(): void {
    let detailsTotal: number = 0;

    _.forEach(this.estimateDetails, details => {
      if (details?.quantity && details?.materials && details?.labor) {
        detailsTotal += (Number(details.quantity) * Number(details.materials)) + Number(details.labor);
      }
    })
  }

  public addWorkTask(estimateDetails: EstimateDetailsModel): void {
    this.estimateDetails.push(estimateDetails)
  }
}
