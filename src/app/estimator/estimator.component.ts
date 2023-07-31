import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EstimateModel } from '../models/estimate-model';
import { MatStepper } from '@angular/material/stepper';
import { Properties } from '../constants/properties';
import { Priorities } from '../constants/priorities';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  
  public firstFormGroup!: UntypedFormGroup;
  public secondFormGroup!: UntypedFormGroup;
  public model: EstimateModel = {} as EstimateModel;
  public estimate: EstimateModel = {} as EstimateModel;
  public properties = Properties;
  public priorities = Priorities;
  public selectedProperty!: '';
  public selectedPriority!: '';
  
  constructor (
    private _formBuilder: UntypedFormBuilder,
    private router: Router
  ) {}

  ngOnInit () {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  public firstNext () {
    this.estimate.firstName = this.model.firstName;
    this.estimate.lastName = this.model.lastName;
    this.estimate.property = this.selectedProperty;
    this.estimate.priority = this.selectedPriority;
  }

  public secondNext () {
    this.estimate.workTask = this.model.workTask;
    this.estimate.description = this.model.description;
    this.estimate.quantity = this.model.quantity;
    this.estimate.labor = this.model.labor;
    this.estimate.materials = this.model.materials;
    console.log(this.estimate)
  }

  public firstValidate (): boolean {
    const firstName = _.trim(this.model.firstName);
    const lastName = _.trim(this.model.firstName);

    return (!!firstName && !!lastName && !!this.selectedProperty && !!this.selectedPriority);
  }

  public secondValidate (): boolean {
    return (!!this.model.workTask && !!this.model.quantity && !!this.model.labor && !!this.model.materials);
  }

  public goHome () {
    this.router.navigateByUrl('/');
  }
}
