import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';

import { AppRoutingModule } from '../app-routing.module';
import { DomiciliarioComponent } from './main/domiciliario/domiciliario.component';

@NgModule({
  declarations: [
    MainComponent,
    DomiciliarioComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
  ]
})
export class PagesModule { }
