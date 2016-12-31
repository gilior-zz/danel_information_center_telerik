import { Injectable }   from '@angular/core';
import {AccountProperties} from './models'
import { Subscription }   from 'rxjs/Subscription';
import { Subject }    from 'rxjs/Subject';

@Injectable()

export class AccountService {
    private accounts: Array<AccountProperties>;
    private account: AccountProperties;
    private accountsSubject = new Subject();
    accounts$ = this.accountsSubject.asObservable();
    private accountSubject = new Subject();
    account$ = this.accountSubject.asObservable();

    constructor() {


    }

    dispose() {
        this.accounts = null;
    }

    loadAccounts() {
        if (this.accounts == null)

            this.accounts = new Array<AccountProperties>();
        for (let i = 1; i < 6; i++) {
            this.accounts.push({ Bank: `AccountBank ${i}`, ID: i, Name: `AccountName ${i}`, Policy: `AccountPolicy ${i}` });
        }
        this.fireAccountsChanged();
        this.setDefaultAccount();
    }

    setDefaultAccount() {
        this.updateAccount(this.aggregateAccount);
    }

    updateAccount(account: AccountProperties) {
        if (this.account != null && (account.isAggregate && this.account.isAggregate || !account.isAggregate && account.ID == this.account.ID)) return;
        if (account.isAggregate)
            this.account = this.aggregateAccount;
        else
            this.account = this.accounts.find(i => i.ID == account.ID);
        this.fireAccountChanged();
    }

    fireAccountsChanged() {
        this.accountsSubject.next();
    }

    fireAccountChanged() {
        this.accountSubject.next();
    }

    get Accounts(): AccountProperties[] {
        return this.accounts;
    }
    get Account(): AccountProperties {
        return this.account;
    }

    get aggregateAccount(): AccountProperties { return { Name: 'all accounts', isAggregate: true } }
}