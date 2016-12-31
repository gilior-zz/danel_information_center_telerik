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
var services_barrel_2 = require('./services.barrel');
var AccountsListComponent = (function () {
    function AccountsListComponent(as, pn) {
        this.as = as;
        this.pn = pn;
    }
    Object.defineProperty(AccountsListComponent.prototype, "hideAccountList", {
        get: function () { return this.pn.currentPageName == 'profile'; },
        enumerable: true,
        configurable: true
    });
    AccountsListComponent.prototype.onAccountChanged = function (account) { this.as.updateAccount(account); };
    AccountsListComponent.prototype.ngOnDestroy = function () {
        //this.accountsSubscription.unsubscribe();
    };
    Object.defineProperty(AccountsListComponent.prototype, "account", {
        get: function () { return this.as.Account; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountsListComponent.prototype, "accounts", {
        get: function () { return this.as.Accounts; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AccountsListComponent.prototype, "aggregateAccount", {
        get: function () { return this.as.aggregateAccount; },
        enumerable: true,
        configurable: true
    });
    AccountsListComponent.prototype.ngOnInit = function () {
    };
    AccountsListComponent = __decorate([
        core_1.Component({ selector: 'accounts-list', moduleId: module.id, templateUrl: './accounts-list.component.html', styleUrls: ['./accounts-list.component.css'] }), 
        __metadata('design:paramtypes', [services_barrel_2.AccountService, services_barrel_1.pageNameService])
    ], AccountsListComponent);
    return AccountsListComponent;
}());
exports.AccountsListComponent = AccountsListComponent;
//# sourceMappingURL=accounts-list.component.js.map