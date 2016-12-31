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
var platform_browser_1 = require('@angular/platform-browser');
var core_module_1 = require('./core.module');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
//import { InformationCenterModule } from './information-center.module'
var login_routing_module_1 = require('./login-routing.module');
var components_barrel_1 = require('./components.barrel');
var login_component_1 = require('./login.component');
//import {AgGridModule} from 'ag-grid-ng2/main';
var shared_module_1 = require('./shared.module');
var components_barrel_2 = require('./components.barrel');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                login_routing_module_1.LoginRoutingModule,
                //InformationCenterModule,
                //AgGridModule.forRoot(),
                core_module_1.CoreModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent, components_barrel_1.MainSiteFooterComponent, components_barrel_1.MainSiteHeaderComponent, components_barrel_2.LanguageBarComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map