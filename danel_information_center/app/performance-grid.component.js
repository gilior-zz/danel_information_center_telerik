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
var services_barrel_1 = require('./services.barrel');
var models_1 = require('./models');
var PerformanceGridComponent = (function () {
    function PerformanceGridComponent(as, pd) {
        var _this = this;
        this.as = as;
        this.pd = pd;
        this.subscription = this.as.account$.subscribe(function () { return _this.updateGridData(); });
    }
    PerformanceGridComponent.prototype.updateGridData = function () {
        var _this = this;
        var data = [];
        for (var i = 0; i < 50; i++)
            data.push([new Date(), this.as.Account.ID || 999, this.as.Account.ID || 999, this.as.Account.ID || 999]);
        this.pd.getPerformancePerResolution(this.as.Account, models_1.Resolution.last12Monthes).then(function (i) { _this.performanceData = { data: data }; });
    };
    PerformanceGridComponent.prototype.ngOnInit = function () {
        var columns = [{ Caption: 'performanceDate', Type: 'date' }, { Caption: 'monthID', Type: 'number' }, { Caption: 'portfolioAmount', Type: 'number' }, { Caption: 'yield', Type: 'number' }];
        this.gridOptions = { Columns: columns };
        this.updateGridData();
    };
    PerformanceGridComponent = __decorate([
        core_1.Component({ selector: 'performance-grid', moduleId: module.id, templateUrl: './performance-grid.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, services_barrel_1.PerformanceDataService])
    ], PerformanceGridComponent);
    return PerformanceGridComponent;
}());
exports.PerformanceGridComponent = PerformanceGridComponent;
//# sourceMappingURL=performance-grid.component.js.map