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
var services_barrel_1 = require('./services.barrel');
var HoldingsDynamicGroupingComponent = (function () {
    function HoldingsDynamicGroupingComponent(as, hd) {
        var _this = this;
        this.as = as;
        this.hd = hd;
        this.holdingsGroupType = models_1.HoldingsGroupType.AssetClass;
        this.subscription = this.as.account$.subscribe(function () { return _this.updateData(); });
    }
    HoldingsDynamicGroupingComponent.prototype.updateData = function () {
        var _this = this;
        var data = [];
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
        for (var i_1 = 0; i_1 < 5; i_1++)
            data.push([this.as.Account.ID || 999, this.as.Account.ID || 999, ("item " + (this.as.Account.ID || 999))]);
        this.hd.getHoldingsByGroupMode(this.as.Account, this.holdingsGroupType).then(function (i) { _this.holdingsData = { data: data }; _this.chartData = chartData; });
    };
    HoldingsDynamicGroupingComponent.prototype.doGroupBy = function (holdingsGroupType) {
        this.holdingsGroupType = holdingsGroupType;
        this.updateData();
    };
    HoldingsDynamicGroupingComponent.prototype.ngOnInit = function () {
        this.updateData();
        this.chartType = 'PieChart';
        this.chartOptions = {
            title: 'holdings',
            //pieHole: 0.1,
            height: 400,
            is3D: true
        };
        var columns = [{ Caption: 'ItemID', Type: 'number' }, { Caption: 'Amount ', Type: 'number' }, { Caption: 'ItemName ', Type: 'string' }];
        this.gridOptions = { Columns: columns };
    };
    HoldingsDynamicGroupingComponent = __decorate([
        core_1.Component({
            selector: 'holdings-dynamic-grouping',
            moduleId: module.id,
            templateUrl: './holdings-dynamic-grouping.component.html',
            styleUrls: ['./holdings-dynamic-grouping.component.css']
        }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, services_barrel_1.HoldingsDataService])
    ], HoldingsDynamicGroupingComponent);
    return HoldingsDynamicGroupingComponent;
}());
exports.HoldingsDynamicGroupingComponent = HoldingsDynamicGroupingComponent;
//# sourceMappingURL=holdings-dynamic-grouping.component.js.map