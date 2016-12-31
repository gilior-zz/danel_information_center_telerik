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
var InputCaptionComponent = (function () {
    function InputCaptionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputCaptionComponent.prototype, "showCaption", void 0);
    InputCaptionComponent = __decorate([
        core_1.Component({
            selector: 'input-caption',
            animations: [
                core_1.trigger('showCaption', [
                    core_1.state('true', core_1.style({
                        opacity: 1,
                        transform: 'translateY(0)',
                        fontSize: '90%'
                    })),
                    core_1.state('false', core_1.style({
                        opacity: 0,
                        transform: 'translateY(100%)',
                        fontSize: '100%'
                    })),
                    core_1.transition('1 => 0', core_1.animate('.3s ease-out')),
                    core_1.transition('0 => 1', [core_1.style({ transform: 'translateY(100%)' }), core_1.animate('.3s ease-out')]),
                ])
            ],
            moduleId: module.id,
            templateUrl: './input-caption.component.html',
            styleUrls: ['./input-caption.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InputCaptionComponent);
    return InputCaptionComponent;
}());
exports.InputCaptionComponent = InputCaptionComponent;
//# sourceMappingURL=input-caption.component.js.map