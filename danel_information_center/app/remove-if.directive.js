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
var RemoveIfDirective = (function () {
    function RemoveIfDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RemoveIfDirective.prototype, "removeIf", {
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
    ], RemoveIfDirective.prototype, "removeIf", null);
    RemoveIfDirective = __decorate([
        core_1.Directive({ selector: '[removeIf]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], RemoveIfDirective);
    return RemoveIfDirective;
}());
exports.RemoveIfDirective = RemoveIfDirective;
//# sourceMappingURL=remove-if.directive.js.map