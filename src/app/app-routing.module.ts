import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstimatorComponent } from './estimator/estimator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estimate', component: EstimatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
