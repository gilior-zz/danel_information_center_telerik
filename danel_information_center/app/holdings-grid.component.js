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
var holdings_data_service_1 = require('./holdings-data.service');
var HoldingsGridComponent = (function () {
    function HoldingsGridComponent(as, hd) {
        var _this = this;
        this.as = as;
        this.hd = hd;
        this.gridData = [];
        this.subscription = this.as.account$.subscribe(function () { return _this.updateGridData(); });
    }
    HoldingsGridComponent.prototype.updateGridData = function () {
        var _this = this;
        this.gridData.length = 0;
        for (var row = 0; row < 20; row++) {
            for (var col = 0; col < 12; col++) {
                this.gridData.push({
                    "holding filed 0": "item " + col
                });
            }
        }
        var datalg = new Array();
        var datamd = new Array();
        var datasm = new Array();
        var dataxs = new Array();
        for (var i = 0; i < 20; i++) {
            datalg[i] = new Array();
            for (var j = 0; j < 12; j++)
                datalg[i].push(this.as.Account.ID || 999);
        }
        for (var i = 0; i < 20; i++) {
            datamd[i] = new Array();
            for (var j = 0; j < 9; j++)
                datamd[i].push(this.as.Account.ID || 999);
        }
        for (var i = 0; i < 20; i++) {
            datasm[i] = new Array();
            for (var j = 0; j < 6; j++)
                datasm[i].push(this.as.Account.ID || 999);
        }
        for (var i = 0; i < 20; i++) {
            dataxs[i] = new Array();
            for (var j = 0; j < 3; j++)
                dataxs[i].push(this.as.Account.ID || 999);
        }
        this.hd.getHoldingsByGroupMode(this.as.Account, models_1.HoldingsGroupType.Detailed).then(function (i) {
            _this.holdingsDatalg = { data: _this.gridData };
            _this.holdingsDatamd = { data: _this.gridData };
            _this.holdingsDatasm = { data: _this.gridData };
            _this.holdingsDataxs = { data: _this.gridData };
        });
    };
    HoldingsGridComponent.prototype.ngOnInit = function () {
        var lgCols = [];
        var mdCols = [];
        var smCols = [];
        var xsCols = [];
        for (var i = 0; i < 12; i++)
            lgCols.push({ field: "holding filed " + i });
        for (var i = 0; i < 9; i++)
            mdCols.push({ field: "holding filed " + i });
        for (var i = 0; i < 6; i++)
            smCols.push({ field: "holding filed " + i });
        for (var i = 0; i < 3; i++)
            xsCols.push({ field: "holding filed " + i });
        this.gridOptionslg = { Columns: lgCols };
        this.gridOptionsmd = { Columns: mdCols };
        this.gridOptionssm = { Columns: smCols };
        this.gridOptionsxs = { Columns: xsCols };
        this.updateGridData();
        //let data = [];
        //for (let i = 0; i < 50; i++)
        //    data.push([this.as.Account.ID || 999, this.as.Account.ID || 999, `item ${this.as.Account.ID || 999}`]);
        //this.hd.getHoldingsByGroupMode(this.as.Account, HoldingsGroupType.Detailed).then(i => { this.holdingsData = { data: data } });
    };
    HoldingsGridComponent = __decorate([
        core_1.Component({ selector: 'holdings-grid', moduleId: module.id, templateUrl: './holdings-grid.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, holdings_data_service_1.HoldingsDataService])
    ], HoldingsGridComponent);
    return HoldingsGridComponent;
}());
exports.HoldingsGridComponent = HoldingsGridComponent;
//# sourceMappingURL=holdings-grid.component.js.map