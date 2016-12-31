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
var forms_1 = require('@angular/forms');
var GoogleRecaptchaDirective = (function () {
    function GoogleRecaptchaDirective(el, model) {
        this.model = model;
        this.theme = '';
        this.setVerified = new core_1.EventEmitter();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
    }
    GoogleRecaptchaDirective.prototype.onResize = function () {
    };
    GoogleRecaptchaDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            grecaptcha.render(_this._el, {
                'sitekey': _this.siteKey,
                'callback': function (data) {
                    if (data) {
                        _this.setVerified.emit(true);
                    }
                },
                lang: 'fr',
                'theme': _this.theme
            });
        }, 1000);
    };
    ;
    GoogleRecaptchaDirective.prototype.onInputChange = function () {
    };
    __decorate([
        core_1.Input('theme'), 
        __metadata('design:type', String)
    ], GoogleRecaptchaDirective.prototype, "theme", void 0);
    __decorate([
        core_1.Input('siteKey'), 
        __metadata('design:type', String)
    ], GoogleRecaptchaDirective.prototype, "siteKey", void 0);
    __decorate([
        core_1.Output('setVerified'), 
        __metadata('design:type', core_1.EventEmitter)
    ], GoogleRecaptchaDirective.prototype, "setVerified", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GoogleRecaptchaDirective.prototype, "onResize", null);
    GoogleRecaptchaDirective = __decorate([
        core_1.Directive({
            selector: '[googlerecaptcha]',
            providers: [forms_1.NgModel],
            host: {
                '(input)': 'onInputChange()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, forms_1.NgModel])
    ], GoogleRecaptchaDirective);
    return GoogleRecaptchaDirective;
}());
exports.GoogleRecaptchaDirective = GoogleRecaptchaDirective;
//# sourceMappingURL=googlerecaptcha.directive.js.map