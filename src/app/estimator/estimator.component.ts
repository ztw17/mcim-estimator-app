import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EstimateModel } from '../models/estimate-model';
import { MatStepper } from '@angular/material/stepper';
import { Properties } from '../constants/properties';
import { Priorities } from '../constants/priorities';

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
  public properties = Properties;
  public priorities = Priorities;
  public selectedProperty!: '';
  public selectedPriority!: '';
  
  constructor (
    private _formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit () {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnChanges () {
    // this.model = {
    //   firstName: '',
    //   lastName: '',
    //   property: '',
    //   priority: '',
    //   workTask: '',
    //   description: '',
    //   quantity: '',
    //   labor: '',
    //   materials: ''
    // }
    console.log(this.model);
  }

  public next () {
    this.updateModel();
  }

  private updateModel () {
    this.model.firstName = this.model.firstName;
    this.model.lastName = this.model.lastName;
    this.model.property = this.selectedProperty;
    this.model.priority = this.selectedPriority;
    console.log(this.model);
  }
}
