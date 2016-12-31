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
var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.state = 'inactive';
    }
    ProfileComponent.prototype.send = function () { };
    Object.defineProperty(ProfileComponent.prototype, "loginProperties", {
        get: function () { return this.userService.loginProperties; },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.setVerified = function (data) {
        setTimeout(this.validCaptcha = data, 0);
    };
    ProfileComponent.prototype.onChangePassword = function () {
        this.submittesSuccessfuly = true;
    };
    ProfileComponent.prototype.onUpdatePasswordModelOpen = function () {
        //this.newPassword = '';
        //this.newPasswordValidation = '';
        //this.currentPassword = '';
        this.submittesSuccessfuly = false;
    };
    ProfileComponent.prototype.ngOnDestroy = function () { this.submittesSuccessfuly = false; };
    ProfileComponent.prototype.onNewPasswordChanged = function (val) {
        this.newPasswordValidation = '';
        this.newPassword = val;
    };
    ProfileComponent.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './profile.html',
            styleUrls: ['./profile.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate(1000, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ]),
                core_1.trigger('passwordLabel', [
                    core_1.state('inactive', core_1.style({
                        transform: 'rotateY(360deg)'
                    })),
                    core_1.state('active', core_1.style({
                        transform: 'rotateY(0deg)'
                    })),
                    core_1.transition('inactive <=> active', core_1.animate(1000))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [services_barrel_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.js.map