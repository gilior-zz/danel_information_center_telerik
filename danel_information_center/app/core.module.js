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
var holdings_data_service_1 = require('./holdings-data.service');
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            providers: [services_barrel_1.AccountService, services_barrel_1.pageNameService, services_barrel_1.SummaryValuesService, services_barrel_1.ParameterService, holdings_data_service_1.HoldingsDataService, services_barrel_1.PerformanceDataService, services_barrel_1.TransactiosDataService, services_barrel_1.UserService, services_barrel_1.AdvisorService, services_barrel_1.AdminService]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map