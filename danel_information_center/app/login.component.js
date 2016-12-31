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
var router_1 = require('@angular/router');
var services_barrel_1 = require('./services.barrel');
var auth_service_1 = require('./auth.service');
var LoginComponent = (function () {
    function LoginComponent(authService, router, as, ads) {
        this.authService = authService;
        this.router = router;
        this.as = as;
        this.ads = ads;
        this.setMessage();
    }
    LoginComponent.prototype.setVerified = function (data) {
        setTimeout(this.validCaptcha = data, 0);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.newUser = {};
        this.user = {};
    };
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login(this.user.name, this.user.password).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
                var redirect = _this.user.name == 'admin' ? 'admin-center' : 'information-center';
                // Set our navigation extras object
                // that passes on our global query params and fragment
                var navigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.ads.dispose();
        this.as.dispose();
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: "./login.component.html",
            moduleId: module.id,
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, services_barrel_1.AccountService, services_barrel_1.AdvisorService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=login.component.js.map