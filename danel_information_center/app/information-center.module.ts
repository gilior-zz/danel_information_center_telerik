import { NgModule } from '@angular/core';
import * as components from './components.barrel'
//import {AgGridModule} from 'ag-grid-ng2/main';
import { ChartWidgetComponent, GridWidgetComponent } from './widgets.barrel'
import { InformationCcenterRoutingModule } from './information-center-routing.module';

import { SharedModule } from './shared.module'

import { } from ''
@NgModule({
    imports: [
        SharedModule,
        InformationCcenterRoutingModule

    ],
    declarations: [
        components.DashboardComponent, components.HoldingsComponent, components.PerformanceComponent, components.TransactionsComponent, components.InformationCenterComponent, components.InformationCenterMenuComponent, GridWidgetComponent, ChartWidgetComponent, components.HoldingsGridComponent, components.HoldingsChartComponent, components.PerformanceGridComponent, components.PerformanceChartComponent, components.TransactionsGridComponent, components.InformationSummaryPanelComponent, components.pageCaptionComponent, components.AccountsListComponent, components.HoldingsDynamicGroupingComponent, components.ContactComponent, components.ProfileComponent, components.AdvisorContactComponent, components.PerformanceToolBarComponent, components.TransactionsToolBarComponent
    ],
    providers: [],
    exports: [components.AdvisorContactComponent]
})
export class InformationCenterModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/