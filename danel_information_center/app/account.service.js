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
var Subject_1 = require('rxjs/Subject');
var AccountService = (function () {
    function AccountService() {
        this.accountsSubject = new Subject_1.Subject();
        this.accounts$ = this.accountsSubject.asObservable();
        this.accountSubject = new Subject_1.Subject();
        this.account$ = this.accountSubject.asObservable();
    }
    AccountService.prototype.dispose = function () {
        this.accounts = null;
    };
    AccountService.prototype.loadAccounts = function () {
        if (this.accounts == null)
            this.accounts = new Array();
        for (var i = 1; i < 6; i++) {
            this.accounts.push({ Bank: "AccountBank " + i, ID: i, Name: "AccountName " + i, Policy: "AccountPolicy " + i });
        }
        this.fireAccountsChanged();
        this.setDefaultAccount();
    };
    AccountService.prototype.setDefaultAccount = function () {
        this.updateAccount(this.aggregateAccount);
    };
    AccountService.prototype.updateAccount = function (account) {
        if (this.account != null && (account.isAggregate && this.account.isAggregate || !account.isAggregate && account.ID == this.account.ID))
            return;
        if (account.isAggregate)
            this.account = this.aggregateAccount;
        else
            this.account = this.accounts.find(function (i) { return i.ID == account.ID; });
        this.fireAccountChanged();
    };
    AccountService.prototype.fireAccountsChanged = function () {
        this.accountsSubject.next();
    };
    AccountService.prototype.fireAccountChanged = function () {
        this.accountSubject.next();
    };
    Object.defineProperty(AccountService.prototype, "Accounts", {
        get: function () {
            return this.accounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "Account", {
        get: function () {
            return this.account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "aggregateAccount", {
        get: function () { return { Name: 'all accounts', isAggregate: true }; },
        enumerable: true,
        configurable: true
    });
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map