import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountProperties } from './models'
import { pageNameService } from './services.barrel'
import { AccountService } from './services.barrel'
import { Subscription } from 'rxjs/Subscription';
@Component({ selector: 'accounts-list', moduleId: module.id, templateUrl: './accounts-list.component.html', styleUrls: ['./accounts-list.component.css'] })

export class AccountsListComponent implements OnInit, OnDestroy {
    private accountsSubscription: Subscription;
    private accountSubscription: Subscription;


    constructor(private as: AccountService, public pn: pageNameService) {

    }

    get hideAccountList(): boolean { return this.pn.currentPageName == 'profile' }

    onAccountChanged(account: AccountProperties) { this.as.updateAccount(account); }

    ngOnDestroy() {
        //this.accountsSubscription.unsubscribe();

    }

    get account(): AccountProperties { return this.as.Account }
    get accounts(): AccountProperties[] { return this.as.Accounts };
    get aggregateAccount(): AccountProperties { return this.as.aggregateAccount }

    ngOnInit() {
    }

}

