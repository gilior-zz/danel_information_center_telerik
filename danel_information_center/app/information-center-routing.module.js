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
var account_resolve_service_1 = require('./account-resolve.service');
var information_center_component_1 = require('./information-center.component');
var auth_guard_service_1 = require('./auth-guard.service');
var components = require('./components.barrel');
var InformationCcenterRoutingModule = (function () {
    function InformationCcenterRoutingModule() {
    }
    InformationCcenterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: information_center_component_1.InformationCenterComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                        resolve: [account_resolve_service_1.AccountResolve],
                        children: [
                            {
                                path: '',
                                canActivateChild: [auth_guard_service_1.AuthGuard],
                                children: [
                                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                                    { path: 'dashboard', component: components.DashboardComponent },
                                    { path: 'holdings', component: components.HoldingsComponent },
                                    { path: 'performance', component: components.PerformanceComponent },
                                    { path: 'transactions', component: components.TransactionsComponent },
                                    { path: 'contact', component: components.ContactComponent },
                                    { path: 'profile', component: components.ProfileComponent },
                                ]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [account_resolve_service_1.AccountResolve]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationCcenterRoutingModule);
    return InformationCcenterRoutingModule;
}());
exports.InformationCcenterRoutingModule = InformationCcenterRoutingModule;
//# sourceMappingURL=information-center-routing.module.js.map