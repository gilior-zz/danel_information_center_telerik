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
var TransactiosDataService = (function () {
    function TransactiosDataService() {
    }
    TransactiosDataService.prototype.getTransactiosPerResolution = function (account, resolution, date) {
        return this.getData(account, resolution, date);
    };
    TransactiosDataService.prototype.getData = function (account, resolution, date) {
        var wait = false;
        //
        var savedTransactions = this.savedTransactions;
        if (savedTransactions == null)
            this.savedTransactions = new Array();
        savedTransactions = this.savedTransactions;
        //
        var savedAccount = savedTransactions.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        if (savedAccount == null)
            savedTransactions.push({ entity: account, transactionsToResoltion: null });
        savedAccount = savedTransactions.find(function (i) { return (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID); });
        //
        var transactionsToResoltion = savedAccount.transactionsToResoltion;
        if (transactionsToResoltion == null)
            savedAccount.transactionsToResoltion = new Array();
        transactionsToResoltion = savedAccount.transactionsToResoltion;
        var transactions = transactionsToResoltion.find(function (i) { return i.resolution == resolution; });
        if (transactions == null)
            transactionsToResoltion.push({ resolution: resolution, transactionsUnits: null });
        transactions = transactionsToResoltion.find(function (i) { return i.resolution == resolution; });
        //
        var units = transactions.transactionsUnits;
        if (units == null) {
            var transactionsUnits = new Array();
            for (var i = 0; i < 50; i++)
                transactionsUnits.push({ amount: i, date: new Date(), quantity: i });
            transactions.transactionsUnits = transactionsUnits;
            wait = true;
        }
        return Observable_1.Observable.of(units).delay(wait ? 5000 : 0).toPromise();
    };
    TransactiosDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TransactiosDataService);
    return TransactiosDataService;
}());
exports.TransactiosDataService = TransactiosDataService;
//# sourceMappingURL=transactions-data.service.js.map