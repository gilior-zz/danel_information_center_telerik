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
var LocationPrinterDirective = (function () {
    function LocationPrinterDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    LocationPrinterDirective.prototype.onResize = function () {
        console.log($(this.elementRef.nativeElement).position());
    };
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LocationPrinterDirective.prototype, "onResize", null);
    LocationPrinterDirective = __decorate([
        core_1.Directive({ selector: '[location-printer]' }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], LocationPrinterDirective);
    return LocationPrinterDirective;
}());
exports.LocationPrinterDirective = LocationPrinterDirective;
//# sourceMappingURL=location-printer.directive.js.map