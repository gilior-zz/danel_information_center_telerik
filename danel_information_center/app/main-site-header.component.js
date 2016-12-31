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
var auth_service_1 = require('./auth.service');
var models_1 = require('./models');
var services_barrel_2 = require('./services.barrel');
var MainSiteHeaderComponent = (function () {
    function MainSiteHeaderComponent(ps, aus, as) {
        this.ps = ps;
        this.aus = aus;
        this.as = as;
    }
    MainSiteHeaderComponent.prototype.ngOnInit = function () {
        this.as.loadAdvisor();
    };
    Object.defineProperty(MainSiteHeaderComponent.prototype, "advisorProperties", {
        get: function () { return this.as.advisorProperties; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainSiteHeaderComponent.prototype, "companyName", {
        get: function () { return this.ps.getParameter(models_1.Parameter.CompanyDisplayName); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainSiteHeaderComponent.prototype, "isLoggedIn", {
        get: function () { return this.aus.isLoggedIn; },
        enumerable: true,
        configurable: true
    });
    MainSiteHeaderComponent = __decorate([
        core_1.Component({ selector: 'main-site-header', moduleId: module.id, templateUrl: './main-site-header.component.html', styleUrls: ['./main-site-header.component.css'] }), 
        __metadata('design:paramtypes', [services_barrel_1.ParameterService, auth_service_1.AuthService, services_barrel_2.AdvisorService])
    ], MainSiteHeaderComponent);
    return MainSiteHeaderComponent;
}());
exports.MainSiteHeaderComponent = MainSiteHeaderComponent;
//# sourceMappingURL=main-site-header.component.js.map