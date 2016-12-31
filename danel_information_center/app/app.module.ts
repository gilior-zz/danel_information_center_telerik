import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { InformationCenterModule } from './information-center.module'
import { LoginRoutingModule } from './login-routing.module';
import { MainSiteFooterComponent, MainSiteHeaderComponent } from './components.barrel'
import { ParameterService } from './services.barrel'
import { LoginComponent } from './login.component';
//import {AgGridModule} from 'ag-grid-ng2/main';
import { SharedModule } from './shared.module'
import { LanguageBarComponent } from './components.barrel'



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginRoutingModule,
        //InformationCenterModule,
        //AgGridModule.forRoot(),
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        LoginComponent, MainSiteFooterComponent, MainSiteHeaderComponent, LanguageBarComponent
    ],
    providers: [


    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/