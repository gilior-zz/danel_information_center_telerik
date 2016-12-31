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
var InputInvalidMessageComponent = (function () {
    function InputInvalidMessageComponent() {
    }
    Object.defineProperty(InputInvalidMessageComponent.prototype, "hideError", {
        set: function (val) { this.showError = !val; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], InputInvalidMessageComponent.prototype, "hideError", null);
    InputInvalidMessageComponent = __decorate([
        core_1.Component({
            selector: 'input-error',
            animations: [
                core_1.trigger('showError', [
                    core_1.state('true', core_1.style({
                        opacity: 1
                    })),
                    core_1.state('false', core_1.style({
                        opacity: 0,
                        transform: 'translateX(20%)'
                    })),
                    core_1.transition('1 => 0', core_1.animate('.3s')),
                    core_1.transition('0 => 1', [core_1.style({ transform: 'translateX(20%)' }), core_1.animate('.3s')]),
                ])
            ],
            template: "\n    <div [@showError]=\"showError\" >\n      <ng-content></ng-content>            \n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], InputInvalidMessageComponent);
    return InputInvalidMessageComponent;
}());
exports.InputInvalidMessageComponent = InputInvalidMessageComponent;
//# sourceMappingURL=input-invalid-message.component.js.map