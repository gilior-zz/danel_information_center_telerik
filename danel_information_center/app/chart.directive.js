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
var GoogleChart = (function () {
    function GoogleChart(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    GoogleChart.prototype.onMouseEnter = function () {
        this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
    };
    GoogleChart.prototype.ngOnDestroy = function () {
        googleLoaded = false;
    };
    GoogleChart.prototype.ngOnChanges = function (changes) {
        //for (let propName in changes) {
        //    let chng = changes[propName];
        //    let cur = JSON.stringify(chng.currentValue);
        //    let prev = JSON.stringify(chng.previousValue);
        //    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        //}
        var _this = this;
        //console.log(JSON.stringify(this.chartData));
        setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element); }, 0);
    };
    GoogleChart.prototype.ngOnInit = function () {
        var _this = this;
        //if (!googleLoaded) {
        //    googleLoaded = true;
        //    google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
        //}
        google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
        setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element); }, 0);
        //this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
    };
    GoogleChart.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            wrapper.draw();
        }
    };
    __decorate([
        core_1.Input('chartType'), 
        __metadata('design:type', String)
    ], GoogleChart.prototype, "chartType", void 0);
    __decorate([
        core_1.Input('chartOptions'), 
        __metadata('design:type', Object)
    ], GoogleChart.prototype, "chartOptions", void 0);
    __decorate([
        core_1.Input('chartData'), 
        __metadata('design:type', Object)
    ], GoogleChart.prototype, "chartData", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GoogleChart.prototype, "onMouseEnter", null);
    GoogleChart = __decorate([
        core_1.Directive({
            selector: '[GoogleChart]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GoogleChart);
    return GoogleChart;
}());
exports.GoogleChart = GoogleChart;
//# sourceMappingURL=chart.directive.js.map