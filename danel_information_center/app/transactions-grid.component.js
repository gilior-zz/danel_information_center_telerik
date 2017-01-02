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
var TransactionsGridComponent = (function () {
    function TransactionsGridComponent(as, td) {
        var _this = this;
        this.as = as;
        this.td = td;
        this.subscription = this.as.account$.subscribe(function () { return _this.updateGridData(); });
    }
    TransactionsGridComponent.prototype.updateGridData = function () {
        var _this = this;
        var gridData = [];
        for (var row = 0; row < 20; row++) {
            for (var col = 0; col < 12; col++) {
                gridData.push({
                    "holding filed 0": "item " + col
                });
            }
        }
        this.td.getTransactiosPerResolution(this.as.Account, models_1.Resolution.last12Monthes).then(function (i) { _this.transactionsData = gridData; });
    };
    TransactionsGridComponent.prototype.ngOnInit = function () {
        var columns = [];
        for (var i = 0; i < 3; i++)
            columns.push({ field: "holding filed " + i });
        this.gridOptions = { Columns: columns };
        this.updateGridData();
    };
    TransactionsGridComponent = __decorate([
        core_1.Component({ selector: 'transactions-grid', moduleId: module.id, templateUrl: './transactions-grid.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, services_barrel_1.TransactiosDataService])
    ], TransactionsGridComponent);
    return TransactionsGridComponent;
}());
exports.TransactionsGridComponent = TransactionsGridComponent;
//# sourceMappingURL=transactions-grid.component.js.map