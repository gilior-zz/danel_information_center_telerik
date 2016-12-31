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
var kendo_angular_grid_1 = require('@progress/kendo-angular-grid');
var common_1 = require('@angular/common');
var components = require('./components.barrel');
var forms_1 = require('@angular/forms');
var directives_barrel_1 = require('./directives.barrel');
//import {AgGridModule} from 'ag-grid-ng2/main';
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [kendo_angular_grid_1.GridModule],
            declarations: [directives_barrel_1.GoogleChart, directives_barrel_1.GridDirective, directives_barrel_1.HideContentDirective, directives_barrel_1.GoogleRecaptchaDirective, directives_barrel_1.LocationPrinterDirective, directives_barrel_1.HoverScaleDirective, directives_barrel_1.RemoveIfDirective, components.InputInvalidMessageComponent, components.InputCaptionComponent],
            exports: [
                common_1.CommonModule, forms_1.FormsModule, directives_barrel_1.GoogleChart, directives_barrel_1.GridDirective, directives_barrel_1.HideContentDirective, directives_barrel_1.GoogleRecaptchaDirective, directives_barrel_1.LocationPrinterDirective, directives_barrel_1.HoverScaleDirective, directives_barrel_1.RemoveIfDirective, components.InputInvalidMessageComponent, components.InputCaptionComponent, kendo_angular_grid_1.GridModule, kendo_angular_grid_1.GridModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=shared.module.js.map