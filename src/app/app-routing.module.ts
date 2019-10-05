import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CompprofilesComponent} from "./compprofiles/compprofiles.component";
import {ProjectinfoComponent} from "./projectinfo/projectinfo.component";

const routes: Routes = [
  { path: 'conc', component: CompprofilesComponent },
  { path: 'overview', component: ProjectinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
