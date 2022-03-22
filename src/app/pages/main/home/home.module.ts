import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//rutas
import { HomeRoutingModule } from './home-routing.module';

//componentes
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
