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
var GridDirective = (function () {
    function GridDirective(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    GridDirective.prototype.ngOnDestroy = function () {
        googleLoaded = false;
    };
    GridDirective.prototype.ngOnChanges = function (changes) {
        //for (let propName in changes) {
        //    let chng = changes[propName];
        //    let cur = JSON.stringify(chng.currentValue);
        //    let prev = JSON.stringify(chng.previousValue);
        //    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        //}
        var _this = this;
        //console.log(JSON.stringify(this.chartData));
        setTimeout(function () { return _this.drawGraph(_this.gridOptions, _this.gridData, _this._element); }, 1000);
    };
    GridDirective.prototype.onMouseEnter = function () {
        this.drawGraph(this.gridOptions, this.gridData, this._element);
    };
    GridDirective.prototype.ngOnInit = function () {
        var _this = this;
        //if (!googleLoaded) {
        //    googleLoaded = true;
        //    google.charts.load('current', { 'packages': ['table'] });
        //}
        google.charts.load('current', { 'packages': ['table'] });
        setTimeout(function () { return _this.drawGraph(_this.gridOptions, _this.gridData, _this._element); }, 1000);
        //this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
    };
    GridDirective.prototype.drawGraph = function (gridOptions, gridData, ele) {
        google.charts.setOnLoadCallback(drawTable);
        function drawTable() {
            var data = new google.visualization.DataTable();
            gridOptions.Columns.forEach(function (col) {
                data.addColumn(col.Type, col.Caption);
            });
            data.addRows(gridData.data);
            var table = new google.visualization.Table(ele);
            table.draw(data, { showRowNumber: false, width: '100%', height: '100%' });
        }
    };
    __decorate([
        core_1.Input('gridOptions'), 
        __metadata('design:type', Object)
    ], GridDirective.prototype, "gridOptions", void 0);
    __decorate([
        core_1.Input('gridData'), 
        __metadata('design:type', Object)
    ], GridDirective.prototype, "gridData", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GridDirective.prototype, "onMouseEnter", null);
    GridDirective = __decorate([
        core_1.Directive({
            selector: '[GoogleGrid]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GridDirective);
    return GridDirective;
}());
exports.GridDirective = GridDirective;
//# sourceMappingURL=grid.directive.js.map