import { Component, ComponentFactoryResolver, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { EstimateDetailsComponent } from '../estimate-details/estimate-details.component';
import { EstimateDetailsModel } from '../models/estimate-details.model';

@Component({
  selector: 'estimate-details-container-component',
  template: `
    <div #dynamicComponentContainer></div>
    <div class="button-wrapper">
      <button (click)="createDynamicComponent()" class="add-button">Create new work task</button>
    </div>
  `,
  styleUrls: ['./estimate-details-container.component.scss']
})
export class EstimateDetailsContainerComponent {
  @Output() outputEstimateDetailsModel = new EventEmitter<EstimateDetailsModel>();
  
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createDynamicComponent(): void {
    // Create a component factory for EstimateDetailsComponent
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EstimateDetailsComponent);

    // Create a new instance of EstimateDetailsComponent
    const dynamicComponentRef = this.dynamicComponentContainer.createComponent(componentFactory);

    const dynamicComponentInstance = dynamicComponentRef.instance;
    this.outputEstimateDetailsModel.emit(dynamicComponentInstance.model)
  }
}

