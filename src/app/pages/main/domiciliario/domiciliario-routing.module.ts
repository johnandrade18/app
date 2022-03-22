import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomiciliarioComponent } from './domiciliario.component'

const routes: Routes = [
  { path: '', component: DomiciliarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomiciliarioRoutingModule { }
