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
var ColumnsComponent = (function () {
    function ColumnsComponent() {
    }
    ColumnsComponent = __decorate([
        core_1.Component({
            selector: 'columns',
            moduleId: module.id,
            templateUrl: './columns.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnsComponent);
    return ColumnsComponent;
}());
exports.ColumnsComponent = ColumnsComponent;
var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    ColumnComponent = __decorate([
        core_1.Component({
            selector: 'column',
            moduleId: module.id,
            templateUrl: './columns.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnComponent);
    return ColumnComponent;
}());
exports.ColumnComponent = ColumnComponent;
var TypeComponent = (function () {
    function TypeComponent() {
    }
    TypeComponent = __decorate([
        core_1.Component({
            selector: 'type',
            moduleId: module.id,
            templateUrl: './columns.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TypeComponent);
    return TypeComponent;
}());
exports.TypeComponent = TypeComponent;
var CaptionComponent = (function () {
    function CaptionComponent() {
    }
    CaptionComponent = __decorate([
        core_1.Component({
            selector: 'caption',
            moduleId: module.id,
            templateUrl: './columns.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CaptionComponent);
    return CaptionComponent;
}());
exports.CaptionComponent = CaptionComponent;
//# sourceMappingURL=columns.js.map