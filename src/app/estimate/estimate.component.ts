import { Component, Input, OnInit } from '@angular/core';
import { EstimateModel } from '../models/estimate.model';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
  @Input() estimateModel!: EstimateModel;

  public totalCost: number = 0;

  ngOnInit() {
    // if (this.estimateModel?.materials && this.estimateModel?.quantity && this.estimateModel?.labor) {
    //   this.totalCost = (this.estimateModel?.quantity * this.estimateModel?.materials) + this.estimateModel?.labor;
    // } 
  }
}
