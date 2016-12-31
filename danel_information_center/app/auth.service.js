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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var router_1 = require('@angular/router');
var AuthService = (function () {
    function AuthService(router, userService, as, ads) {
        this.router = router;
        this.userService = userService;
        this.as = as;
        this.ads = ads;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (name, pass) {
        var _this = this;
        this.userService.loginProperties = { name: name, idNumber: '123456789', mail: 'mail@mail.com', phone: '0534325434' };
        return Observable_1.Observable.of(true).delay(0).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.ads.dispose();
        this.as.dispose();
        this.isLoggedIn = false;
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, services_barrel_1.UserService, services_barrel_1.AccountService, services_barrel_1.AdvisorService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=auth.service.js.map