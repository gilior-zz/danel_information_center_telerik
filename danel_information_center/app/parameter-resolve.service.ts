import { Injectable }             from '@angular/core';
import {Resolve,
} from '@angular/router';
import {ParameterService} from './services.barrel'

@Injectable()
export class ParameterResolve implements Resolve<number> {


    constructor(private ps: ParameterService) {
        console.log('in ParameterResolve');
    }
    resolve() {
        console.log('inside ParameterResolve');
        return 1;
    }
}