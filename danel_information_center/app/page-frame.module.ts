import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {MainSiteFooterComponent, MainSiteHeaderComponent} from  './components.barrel'


//import { informationCenterRouting } from './information-center.routing';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MainSiteFooterComponent, MainSiteHeaderComponent
    ],
    providers: []
})
export class PageFrameModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/