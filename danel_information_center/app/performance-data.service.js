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
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
var PerformanceDataService = (function () {
    function PerformanceDataService() {
    }
    PerformanceDataService.prototype.getPerformancePerResolution = function (account, resolution) {
        return this.getData(account, resolution);
    };
    PerformanceDataService.prototype.getData = function (account, resolution) {
        var wait = false;
        //
        var savedYields = this.savedYields;
        if (savedYields == null)
            this.savedYields = new Array();
        savedYields = this.savedYields;
        //
        var savedAccount = savedYields.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        if (savedAccount == null)
            savedYields.push({ entity: account, performancesToResoltion: null });
        savedAccount = savedYields.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        //
        var performancesToResoltion = savedAccount.performancesToResoltion;
        if (performancesToResoltion == null)
            savedAccount.performancesToResoltion = new Array();
        performancesToResoltion = savedAccount.performancesToResoltion;
        var performances = performancesToResoltion.find(function (i) { return i.resolution == resolution; });
        if (performances == null)
            performancesToResoltion.push({ resolution: resolution, performanceUnits: null });
        performances = performancesToResoltion.find(function (i) { return i.resolution == resolution; });
        //
        var units = performances.performanceUnits;
        if (units == null) {
            var performanceUnits = new Array();
            for (var i = 0; i < 50; i++)
                performanceUnits.push({ date: new Date(), amount: i, net: i });
            performances.performanceUnits = performanceUnits;
            wait = true;
        }
        return Observable_1.Observable.of(units).delay(wait ? 5000 : 0).toPromise();
    };
    PerformanceDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PerformanceDataService);
    return PerformanceDataService;
}());
exports.PerformanceDataService = PerformanceDataService;
//# sourceMappingURL=performance-data.service.js.map