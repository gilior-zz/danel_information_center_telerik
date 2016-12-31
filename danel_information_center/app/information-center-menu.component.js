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
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var InformationCenterMenuComponent = (function () {
    function InformationCenterMenuComponent(pn, authService, userService, router) {
        this.pn = pn;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.collapse = window.screen.width < 768 ? 'collapse' : '';
        this.navbarCollapse = window.screen.width < 768 ? '.navbar-collapse' : '';
    }
    Object.defineProperty(InformationCenterMenuComponent.prototype, "pageName", {
        get: function () { return this.pn.currentPageName; },
        enumerable: true,
        configurable: true
    });
    InformationCenterMenuComponent.prototype.onResize = function () {
        this.collapse = window.innerWidth < 768 ? 'collapse' : '';
        this.navbarCollapse = window.innerWidth < 768 ? '.navbar-collapse' : '';
    };
    Object.defineProperty(InformationCenterMenuComponent.prototype, "loginProperties", {
        get: function () { return this.userService.loginProperties; },
        enumerable: true,
        configurable: true
    });
    InformationCenterMenuComponent.prototype.profile = function () { };
    InformationCenterMenuComponent.prototype.logout = function () {
        this.authService.logout();
        //this.setMessage();
    };
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], InformationCenterMenuComponent.prototype, "onResize", null);
    InformationCenterMenuComponent = __decorate([
        core_1.Component({
            selector: 'information-center-menu', moduleId: module.id, templateUrl: './information-center-menu.component.html',
            styleUrls: ['./information-center-menu.component.css'],
        }), 
        __metadata('design:paramtypes', [services_barrel_1.pageNameService, auth_service_1.AuthService, services_barrel_1.UserService, router_1.Router])
    ], InformationCenterMenuComponent);
    return InformationCenterMenuComponent;
}());
exports.InformationCenterMenuComponent = InformationCenterMenuComponent;
//# sourceMappingURL=information-center-menu.component.js.map