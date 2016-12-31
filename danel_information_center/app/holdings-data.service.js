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
var HoldingsDataService = (function () {
    function HoldingsDataService() {
    }
    HoldingsDataService.prototype.getHoldingsByGroupMode = function (account, holdingsGroupType) {
        return this.getData(account, holdingsGroupType);
    };
    HoldingsDataService.prototype.getData = function (account, holdingsGroupType) {
        var wait = false;
        //
        var savedHoldings = this.savedHoldings;
        if (savedHoldings == null)
            this.savedHoldings = new Array();
        savedHoldings = this.savedHoldings;
        //
        var savedAccount = savedHoldings.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        if (savedAccount == null)
            savedHoldings.push({ entity: account, units: null });
        savedAccount = savedHoldings.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        //
        var units = savedAccount.units;
        if (units == null)
            savedAccount.units = new Array();
        units = savedAccount.units;
        //
        var holdingsPerGrouping = units.find(function (i) { return i.holdingsGroupType == holdingsGroupType; });
        if (holdingsPerGrouping == null) {
            var holdingGroupUnit = new Array();
            for (var i = 0; i < 50; i++)
                holdingGroupUnit.push({ itemID: i, amount: (50 - i) * 3, itemName: "Item " + i });
            holdingsPerGrouping = { holdingsGroupType: holdingsGroupType, units: holdingGroupUnit };
            units.push(holdingsPerGrouping);
            wait = true;
        }
        return Observable_1.Observable.of(holdingsPerGrouping.units).delay(wait ? 5000 : 0).toPromise();
    };
    HoldingsDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HoldingsDataService);
    return HoldingsDataService;
}());
exports.HoldingsDataService = HoldingsDataService;
//# sourceMappingURL=holdings-data.service.js.map