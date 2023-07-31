import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  properties = [
    {value: 'crestone', viewValue: 'The Crestone'},
    {value: 'elk', viewValue: 'The Elk'},
    {value: 'gore', viewValue: 'The Gore'},
    {value: 'sanJuan', viewValue: 'The San Juan'},
    {value: 'sawatch', viewValue: 'The Sawatch'},
  ];
  priorities = [
    {value: 1, viewValue: 'Low'},
    {value: 2, viewValue: 'Medium'},
    {value: 3, viewValue: 'High'},
    {value: 4, viewValue: 'Critical'},
  ];
  
  constructor (private _formBuilder: FormBuilder) {}
}
