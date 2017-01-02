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
var GridWidgetComponent = (function () {
    function GridWidgetComponent(el) {
        this.el = el;
        this.hiddenColumns = [];
    }
    GridWidgetComponent.prototype.ngOnChanges = function () {
    };
    GridWidgetComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GridWidgetComponent.prototype, "columns", {
        get: function () {
            console.log(this.gridOptions.Columns);
            return this.gridOptions.Columns;
        },
        enumerable: true,
        configurable: true
    });
    GridWidgetComponent.prototype.restoreColumns = function () {
        this.hiddenColumns.length = 0;
    };
    GridWidgetComponent.prototype.hideColumn = function (field) {
        this.hiddenColumns.push(field);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridWidgetComponent.prototype, "gridOptions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridWidgetComponent.prototype, "gridData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridWidgetComponent.prototype, "gridID", void 0);
    GridWidgetComponent = __decorate([
        core_1.Component({
            selector: 'danel-grid',
            moduleId: module.id,
            templateUrl: './grid.widget.html',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GridWidgetComponent);
    return GridWidgetComponent;
}());
exports.GridWidgetComponent = GridWidgetComponent;
//# sourceMappingURL=grid.widget.js.map