import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CompprofilesComponent } from './compprofiles/compprofiles.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { SlopeprofilesComponent } from './slopeprofiles/slopeprofiles.component';
import { FluxprofilesComponent } from './fluxprofiles/fluxprofiles.component';
import { InterdprofilesComponent } from './interdprofiles/interdprofiles.component';
import { ConvergenceComponent } from './convergence/convergence.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it

@NgModule({
  declarations: [
    AppComponent,
    CompprofilesComponent,
    ProjectinfoComponent,
    SlopeprofilesComponent,
    FluxprofilesComponent,
    InterdprofilesComponent,
    ConvergenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
