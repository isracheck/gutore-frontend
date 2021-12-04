import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'reserva/:reserveId/:reserveDate', component: ReserveComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
