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
var models_1 = require('./models');
//import {HoldingsDataService} from './holdings-data.service'
var services_barrel_1 = require('./services.barrel');
var HoldingsChartComponent = (function () {
    function HoldingsChartComponent(as, hd) {
        var _this = this;
        this.as = as;
        this.hd = hd;
        this.subscription = this.as.account$.subscribe(function () { return _this.updateChartData(); });
    }
    HoldingsChartComponent.prototype.ngOnInit = function () {
        this.updateChartData();
        this.chartType = 'PieChart';
        this.chartOptions = {
            title: 'holdings',
            //pieHole: 0.1,
            height: 400,
            is3D: true
        };
    };
    HoldingsChartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HoldingsChartComponent.prototype.updateChartData = function () {
        var _this = this;
        //console.log(`in updateChartData account:${this.as.Account.isAggregate}`);
        var num = this.as.Account.ID == null ? 50 : this.as.Account.ID;
        var i = 3;
        var chartData = [
            //['Year', 'Sales'],
            ['Asset', 'Amount'],
            ['A', num ^= i++],
            ['B', num ^= i++],
            ['C', num ^= i++],
            ['D', num ^= i++],
            ['E', num ^= i++]];
        this.hd.getHoldingsByGroupMode(this.as.Account, this.holdingsGroupType).then(function (i) { _this.chartData = chartData; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HoldingsChartComponent.prototype, "holdingsGroupType", void 0);
    HoldingsChartComponent = __decorate([
        core_1.Component({ selector: 'holdings-chart', moduleId: module.id, templateUrl: './holdings-chart.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, services_barrel_1.HoldingsDataService])
    ], HoldingsChartComponent);
    return HoldingsChartComponent;
}());
exports.HoldingsChartComponent = HoldingsChartComponent;
//# sourceMappingURL=holdings-chart.component.js.map