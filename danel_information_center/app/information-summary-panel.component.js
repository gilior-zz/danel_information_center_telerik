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
var InformationSummaryPanelComponent = (function () {
    function InformationSummaryPanelComponent(sv, pn) {
        this.sv = sv;
        this.pn = pn;
    }
    InformationSummaryPanelComponent.prototype.ngOnDestroy = function () {
        this.panelStructureSubscription.unsubscribe();
        //this.summaryValuesSubscription.unsubscribe();
    };
    Object.defineProperty(InformationSummaryPanelComponent.prototype, "account", {
        get: function () { return this.sv.accountProperties; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformationSummaryPanelComponent.prototype, "performance", {
        get: function () { return this.sv.performanceSummaryValues; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformationSummaryPanelComponent.prototype, "transactions", {
        get: function () { return this.sv.transactionsSummaryValues; },
        enumerable: true,
        configurable: true
    });
    InformationSummaryPanelComponent.prototype.clearStructure = function () {
        this.isTransactionsStructure = false;
        this.isYieldStructure = false;
        this.hideInformationSummaryPanelComponent = false;
    };
    InformationSummaryPanelComponent.prototype.setStructure = function () {
        switch (this.pn.currentPageName) {
            case "holdings":
            case "profile":
                this.hideInformationSummaryPanelComponent = true;
                break;
            case "dashboard":
            case "performance":
                this.isYieldStructure = true;
                break;
            case "transactions":
                this.isTransactionsStructure = true;
                break;
        }
    };
    InformationSummaryPanelComponent.prototype.updatePanelStructure = function () {
        this.clearStructure();
        this.setStructure();
    };
    InformationSummaryPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.panelStructureSubscription = this.pn.pageNameEvent$.subscribe(function () { return _this.updatePanelStructure(); });
        //this.panelStructureSubscription = this.sv.summaryValues$.subscribe(
        //    () => this.updateSummaryValues());
    };
    InformationSummaryPanelComponent = __decorate([
        core_1.Component({ selector: 'information-summary-panel', moduleId: module.id, templateUrl: 'information-summary-panel.component.html', styleUrls: ['./information-summary-panel.component.css'] }), 
        __metadata('design:paramtypes', [services_barrel_1.SummaryValuesService, services_barrel_1.pageNameService])
    ], InformationSummaryPanelComponent);
    return InformationSummaryPanelComponent;
}());
exports.InformationSummaryPanelComponent = InformationSummaryPanelComponent;
//# sourceMappingURL=information-summary-panel.component.js.map