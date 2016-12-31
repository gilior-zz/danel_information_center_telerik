import {Component, OnInit }   from '@angular/core';
import { TransactiosDataService, AccountService} from './services.barrel'
import {GridOptions, Holding, Column, GridData, Resolution} from './models'
import { Subscription }   from 'rxjs/Subscription';
@Component({ selector: 'transactions-grid', moduleId: module.id, templateUrl: './transactions-grid.component.html' })

export class TransactionsGridComponent implements OnInit {
    gridOptions: GridOptions
    transactionsData: GridData;
    private subscription: Subscription;
    constructor(private as: AccountService, private td: TransactiosDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateGridData());
    }

    updateGridData() {
        let data = [];
        for (let i = 0; i < 50; i++)
            data.push([new Date(), this.as.Account.ID || 999, this.as.Account.ID || 999]);
        this.td.getTransactiosPerResolution(this.as.Account, Resolution.last12Monthes).then(i => { this.transactionsData = { data: data } });
    }

    ngOnInit() {
        let columns: Column[] = [{ Caption: 'Date', Type: 'date' }, { Caption: 'quantity', Type: 'number' }, { Caption: 'amount', Type: 'number' }]
        this.gridOptions = { Columns: columns };
        this.updateGridData();


    }
}