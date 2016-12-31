import {Injectable  }   from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Parameter, ParameterDefinition} from './models'

@Injectable()

export class ParameterService {
    parameter: Parameter;
    parameterDefinition: ParameterDefinition;
    parameters: Array<ParameterDefinition>;
    constructor() {
        //console.log('in constructor in ParameterService');
        //Observable.of(true).delay(10000);
        //setTimeout(() => { }, 10000);
        this.loadParameters();
        //console.log(this.parameters);
    }

    getParameter(parameter: Parameter): any { return this.parameters.find(i => i.parameter == parameter).value; }

    loadParameters() {
        this.parameters = new Array<ParameterDefinition>();
        setTimeout(this.parameters.push({ parameter: Parameter.CompanyDisplayName, value: 'angular corporation' }, { parameter: Parameter.AllowWebMessageToAdvisor, value: true }), 0);

        //for (let i = 0; i < 9999999999; i++) { }

    }

}
export function getParameters(): Promise<Map<string, any>> {
    let parameters: Map<string, any> = new Map<string, any>();
    parameters.set('name', 'company');
    return Promise.resolve(parameters);
}