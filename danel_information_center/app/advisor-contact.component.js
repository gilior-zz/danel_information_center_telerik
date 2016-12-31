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
var AdvisorContactComponent = (function () {
    function AdvisorContactComponent(as, aus) {
        this.as = as;
        this.aus = aus;
        this.state = 'inactive';
        //$('[data-toggle="popover"]').popover()
    }
    Object.defineProperty(AdvisorContactComponent.prototype, "advisorProperties", {
        get: function () { return this.as.advisorProperties; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvisorContactComponent.prototype, "builtInMessages", {
        get: function () { return this.as.builtInMessages; },
        enumerable: true,
        configurable: true
    });
    ;
    AdvisorContactComponent.prototype.onMouseover = function () { console.log('onMouseover'); };
    AdvisorContactComponent.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    Object.defineProperty(AdvisorContactComponent.prototype, "isLoggedIn", {
        get: function () { return this.aus.isLoggedIn; },
        enumerable: true,
        configurable: true
    });
    AdvisorContactComponent.prototype.onSubmit = function () {
        this.submmited = !this.submmited;
        console.log(this._content || this.message);
    };
    AdvisorContactComponent = __decorate([
        core_1.Component({
            selector: 'advisor-contact',
            moduleId: module.id,
            templateUrl: './advisor-contact.component.html',
            styleUrls: ['./advisor-contact.component.css'],
            animations: [
                core_1.trigger('arrow', [
                    core_1.state('inactive', core_1.style({
                        transform: 'rotateX(180deg)'
                    })),
                    core_1.state('active', core_1.style({
                        transform: 'rotateX(0deg)'
                    })),
                    core_1.transition('inactive <=> active', core_1.animate('1s ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [services_barrel_1.AdvisorService, auth_service_1.AuthService])
    ], AdvisorContactComponent);
    return AdvisorContactComponent;
}());
exports.AdvisorContactComponent = AdvisorContactComponent;
//# sourceMappingURL=advisor-contact.component.js.map