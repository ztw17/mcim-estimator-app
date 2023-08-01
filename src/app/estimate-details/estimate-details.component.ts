import { Component, EventEmitter, Output } from '@angular/core';
import { EstimateDetailsModel } from '../models/estimate-details.model';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.scss']
})
export class EstimateDetailsComponent {
  @Output() outputEstimateDetailsModel = new EventEmitter<EstimateDetailsModel>();

  public model: EstimateDetailsModel = {} as EstimateDetailsModel;
   
  public saveWorkTask(): void {
    this.outputEstimateDetailsModel.emit(this.model)
  }
}
