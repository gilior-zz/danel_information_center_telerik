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
var ContactComponent = (function () {
    function ContactComponent(userService) {
        this.userService = userService;
    }
    ContactComponent.prototype.send = function () { };
    ContactComponent.prototype.setVerified = function (data) {
        setTimeout(this.validCaptcha = data, 0);
    };
    Object.defineProperty(ContactComponent.prototype, "loginProperties", {
        get: function () { return this.userService.loginProperties; },
        enumerable: true,
        configurable: true
    });
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './contact.html',
            styleUrls: ['./contact.css']
        }), 
        __metadata('design:paramtypes', [services_barrel_1.UserService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.js.map