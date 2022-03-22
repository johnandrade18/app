import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './main/main.component';


// Auth Guard
import { AuthGuard } from '../guards/auth.guard';
import { HomeModule } from './main/home/home.module';
import { DomiciliarioModule } from './main/domiciliario/domiciliario.module';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: '', loadChildren: () => LoginModule,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'dashboard', loadChildren: () => HomeModule },
      { path: 'AgendaDomiciliaria', loadChildren: () => DomiciliarioModule },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
