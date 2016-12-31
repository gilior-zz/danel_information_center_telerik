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
var pageCaptionComponent = (function () {
    function pageCaptionComponent(pn) {
        this.pn = pn;
        //this.subscription = this.pn.pageNameEvent$.subscribe(
        //    () => this.updatePageName());
    }
    pageCaptionComponent.prototype.ngOnInit = function () {
        //this.updatePageName()
    };
    Object.defineProperty(pageCaptionComponent.prototype, "pageName", {
        get: function () { return this.pn.currentPageName; },
        enumerable: true,
        configurable: true
    });
    pageCaptionComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
    };
    pageCaptionComponent = __decorate([
        core_1.Component({ selector: 'page-caption', moduleId: module.id, templateUrl: './page-caption.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.pageNameService])
    ], pageCaptionComponent);
    return pageCaptionComponent;
}());
exports.pageCaptionComponent = pageCaptionComponent;
//# sourceMappingURL=page-caption.component.js.map