import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EstimateDetailsModel } from '../models/estimate-details.model';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.scss']
})
export class EstimateDetailsComponent {
  @Output() outputEstimateDetailsModel = new EventEmitter<EstimateDetailsModel>();

  public model: EstimateDetailsModel = {
    workTask: undefined,
    description: undefined,
    quantity: undefined,
    labor: undefined,
    materials: undefined 
  };
   
  public saveWorkTask() {
    this.outputEstimateDetailsModel.emit(this.model)
  }
}
