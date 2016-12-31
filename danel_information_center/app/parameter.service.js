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
var models_1 = require('./models');
var ParameterService = (function () {
    function ParameterService() {
        //console.log('in constructor in ParameterService');
        //Observable.of(true).delay(10000);
        //setTimeout(() => { }, 10000);
        this.loadParameters();
        //console.log(this.parameters);
    }
    ParameterService.prototype.getParameter = function (parameter) { return this.parameters.find(function (i) { return i.parameter == parameter; }).value; };
    ParameterService.prototype.loadParameters = function () {
        this.parameters = new Array();
        setTimeout(this.parameters.push({ parameter: models_1.Parameter.CompanyDisplayName, value: 'angular corporation' }, { parameter: models_1.Parameter.AllowWebMessageToAdvisor, value: true }), 0);
        //for (let i = 0; i < 9999999999; i++) { }
    };
    ParameterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ParameterService);
    return ParameterService;
}());
exports.ParameterService = ParameterService;
function getParameters() {
    var parameters = new Map();
    parameters.set('name', 'company');
    return Promise.resolve(parameters);
}
exports.getParameters = getParameters;
//# sourceMappingURL=parameter.service.js.map