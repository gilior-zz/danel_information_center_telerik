"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var components = require('./components.barrel');
//import {AgGridModule} from 'ag-grid-ng2/main';
var widgets_barrel_1 = require('./widgets.barrel');
var information_center_routing_module_1 = require('./information-center-routing.module');
var shared_module_1 = require('./shared.module');
var InformationCenterModule = (function () {
    function InformationCenterModule() {
    }
    InformationCenterModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                information_center_routing_module_1.InformationCcenterRoutingModule
            ],
            declarations: [
                components.DashboardComponent, components.HoldingsComponent, components.PerformanceComponent, components.TransactionsComponent, components.InformationCenterComponent, components.InformationCenterMenuComponent, widgets_barrel_1.GridWidgetComponent, widgets_barrel_1.ChartWidgetComponent, components.HoldingsGridComponent, components.HoldingsChartComponent, components.PerformanceGridComponent, components.PerformanceChartComponent, components.TransactionsGridComponent, components.InformationSummaryPanelComponent, components.pageCaptionComponent, components.AccountsListComponent, components.HoldingsDynamicGroupingComponent, components.ContactComponent, components.ProfileComponent, components.AdvisorContactComponent, components.PerformanceToolBarComponent, components.TransactionsToolBarComponent
            ],
            providers: [],
            exports: [components.AdvisorContactComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationCenterModule);
    return InformationCenterModule;
}());
exports.InformationCenterModule = InformationCenterModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=information-center.module.js.map