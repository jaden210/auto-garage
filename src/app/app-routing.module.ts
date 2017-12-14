import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageComponent } from './garage/garage.component';

const routes: Routes = [
  { path: '', redirectTo: '/garage', pathMatch: 'full' },
  { path: 'garage', component: GarageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
