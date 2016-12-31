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
var common_1 = require('@angular/common');
var components_barrel_1 = require('./components.barrel');
//import { informationCenterRouting } from './information-center.routing';
var PageFrameModule = (function () {
    function PageFrameModule() {
    }
    PageFrameModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            declarations: [
                components_barrel_1.MainSiteFooterComponent, components_barrel_1.MainSiteHeaderComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PageFrameModule);
    return PageFrameModule;
}());
exports.PageFrameModule = PageFrameModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=page-frame.module.js.map