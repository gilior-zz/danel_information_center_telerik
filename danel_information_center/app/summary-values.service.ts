import { Injectable } from '@angular/core'
import { pageNameService, AccountService } from './services.barrel'

import { AccountProperties, PerformanceSummaryValues, TransactionsSummaryValues, AccountPerformanceSummaryValues, AccountTransactionsSummaryValues } from './models'
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SummaryValuesService {
    private savedAccountsProperties: Array<AccountProperties>;
    private accountsTransactionsSummaryValues: Array<AccountTransactionsSummaryValues>;
    private accountsPerformanceSummaryValues: Array<AccountPerformanceSummaryValues>;
    private summaryValuesSubject = new Subject();
    summaryValues$ = this.summaryValuesSubject.asObservable();
    public accountProperties: AccountProperties;
    public performanceSummaryValues: PerformanceSummaryValues;
    public transactionsSummaryValues: TransactionsSummaryValues;
    private subscription1: Subscription;
    private subscription2: Subscription;
    constructor(public pn: pageNameService, public as: AccountService) {
        this.subscription1 = this.pn.pageNameEvent$.subscribe(
            () => { this.onNavigation(); this.fireSummaryValuesChanged() });
        this.subscription2 = this.as.account$.subscribe(
            () => this.onAccountChanged());
        this.updateAccountValues();
        this.updateSummaryValues();
    }

    onAccountChanged() {
        this.updateAccountValues();
        this.updateSummaryValues();
    }

    updateTransactionsSummariesValues() {
        let accountsTransactionsSummaryValues = this.accountsTransactionsSummaryValues;
        if (accountsTransactionsSummaryValues == null) // no transactionsSummariesValues at all
            this.accountsTransactionsSummaryValues = new Array<AccountTransactionsSummaryValues>();
        accountsTransactionsSummaryValues = this.accountsTransactionsSummaryValues
        let accountTransactionSummaryValues = accountsTransactionsSummaryValues.find(i => i.Account.isAggregate ? this.as.Account.isAggregate : i.Account.ID == this.as.Account.ID)
        if (accountTransactionSummaryValues == null) // no account summary values
        {
            accountsTransactionsSummaryValues.push({ Account: this.as.Account, TransactionsSummaryValues: { BuysFromYearStart: this.as.Account.ID || 999, SalesFromYearStart: this.as.Account.ID || 999, TaxFromYearStart: this.as.Account.ID || 999 } });
        }

        accountTransactionSummaryValues = accountsTransactionsSummaryValues.find(i => i.Account.isAggregate ? this.as.Account.isAggregate : i.Account.ID == this.as.Account.ID)

        this.transactionsSummaryValues = accountTransactionSummaryValues.TransactionsSummaryValues;
    }

    updatePerformanceSummariesValues() {
        let accountsPerformanceSummaryValues = this.accountsPerformanceSummaryValues;
        if (accountsPerformanceSummaryValues == null) // no PerformanceSummariesValues at all
            this.accountsPerformanceSummaryValues = new Array<AccountPerformanceSummaryValues>();
        accountsPerformanceSummaryValues = this.accountsPerformanceSummaryValues
        let accountPerformanceSummaryValues = accountsPerformanceSummaryValues.find(i => i.Account.isAggregate ? this.as.Account.isAggregate : i.Account.ID == this.as.Account.ID)
        if (accountPerformanceSummaryValues == null) // no account summary values
        {
            accountsPerformanceSummaryValues.push({ Account: this.as.Account, PerformanceSummaryValues: { PortfolioAmount: this.as.Account.ID || 999, PerformanceFromYearStart: this.as.Account.ID || 999, Performancelast12Month: this.as.Account.ID || 999, Performancelast36Month: this.as.Account.ID || 999 } });

        }

        accountPerformanceSummaryValues = accountsPerformanceSummaryValues.find(i => i.Account.isAggregate ? this.as.Account.isAggregate : i.Account.ID == this.as.Account.ID)

        this.performanceSummaryValues = accountPerformanceSummaryValues.PerformanceSummaryValues;
    }



    updateSummaryValues() {
        this.updatePerformanceSummariesValues();
        this.updateTransactionsSummariesValues();
    }

    updateAccountValues() {
        let savedAccountsProperties = this.savedAccountsProperties;
        if (savedAccountsProperties == null) // no accounts at all       
            this.savedAccountsProperties = new Array<AccountProperties>();
        savedAccountsProperties = this.savedAccountsProperties;
        let savedAccountProperties = savedAccountsProperties.find(i => i.isAggregate ? this.as.Account.isAggregate : i.ID == this.as.Account.ID);
        if (savedAccountProperties == null) // account is not loaded
            savedAccountsProperties.push({ Bank: `Bank ${this.as.Account.ID || -999}`, Name: `Name ${this.as.Account.ID || -999}`, Policy: `Policy ${this.as.Account.ID || -999}`, ID: this.as.Account.ID || -999, isAggregate: this.as.Account.isAggregate });
        savedAccountProperties = savedAccountsProperties.find(i => i.isAggregate ? this.as.Account.isAggregate : i.ID == this.as.Account.ID);
        this.accountProperties = savedAccountProperties;
    }

    fireSummaryValuesChanged() {
        this.summaryValuesSubject.next();
    }

    onNavigation() {
        //this.updateSummaryValues();



    }
}


