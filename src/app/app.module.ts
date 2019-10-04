import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompprofilesComponent } from './compprofiles/compprofiles.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { SlopeprofilesComponent } from './slopeprofiles/slopeprofiles.component';
import { FluxprofilesComponent } from './fluxprofiles/fluxprofiles.component';
import { InterdprofilesComponent } from './interdprofiles/interdprofiles.component';
import { ConvergenceComponent } from './convergence/convergence.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en); // <-- import it

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
    LazyLoadImageModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
