import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LightingComponent } from './Pages/lighting/lighting.component';

const routes: Routes = [
  { path: '', redirectTo: 'ar/home', pathMatch: 'full' }, 
  { path: ':lang/home', component: HomeComponent },
  { path: ':lang/lighting', component: LightingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
