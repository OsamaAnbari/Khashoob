import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LightingComponent } from './Pages/lighting/lighting.component';
import { FramesComponent } from './Pages/frames/frames.component';
import { AccessoriesComponent } from './Pages/accessories/accessories.component';
import { BoxesComponent } from './Pages/boxes/boxes.component';
import { OfficeComponent } from './Pages/office/office.component';
import { KeychainComponent } from './Pages/keychain/keychain.component';

const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: ':lang', redirectTo: ':lang/home', pathMatch: 'full' },
  { path: ':lang/home', component: HomeComponent },
  { path: ':lang/lighting', component: LightingComponent },
  { path: ':lang/frames', component: FramesComponent },
  { path: ':lang/general', component: AccessoriesComponent },
  { path: ':lang/boxes', component: BoxesComponent },
  { path: ':lang/keychain', component: KeychainComponent },
  { path: ':lang/office', component: OfficeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
