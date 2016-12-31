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
var admin_home_component_1 = require('./admin-home.component');
var admin_center_component_1 = require('./admin-center.component');
var auth_guard_service_1 = require('./auth-guard.service');
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        canActivate: [auth_guard_service_1.AuthGuard],
        component: admin_home_component_1.AdminHomeComponent,
        children: [
            {
                path: '',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'admin-center',
                        pathMatch: 'full'
                    },
                    {
                        path: 'admin-center',
                        component: admin_center_component_1.AdminCenterComponent
                    }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map