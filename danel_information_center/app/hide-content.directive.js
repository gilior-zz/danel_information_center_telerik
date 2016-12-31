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
var HideContentDirective = (function () {
    function HideContentDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(HideContentDirective.prototype, "hideContent", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], HideContentDirective.prototype, "hideContent", null);
    HideContentDirective = __decorate([
        core_1.Directive({ selector: '[hideContent]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], HideContentDirective);
    return HideContentDirective;
}());
exports.HideContentDirective = HideContentDirective;
//# sourceMappingURL=hide-content.directive.js.map