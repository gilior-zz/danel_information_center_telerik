import { Injectable }             from '@angular/core';
import {Resolve,
} from '@angular/router';
import {AccountService} from './services.barrel'

@Injectable()
export class AccountResolve implements Resolve<number> {


    constructor(private as: AccountService) { }
    resolve() {
        console.log('inside resolve');
        setTimeout(this.as.loadAccounts(), 10000);
        return 1;
    }
}