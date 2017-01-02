import { Component, OnInit } from '@angular/core';
import { TransactiosDataService, AccountService } from './services.barrel'
import { GridOptions, Holding, Column, GridData, Resolution } from './models'
import { Subscription } from 'rxjs/Subscription';
@Component({ selector: 'transactions-grid', moduleId: module.id, templateUrl: './transactions-grid.component.html' })

export class TransactionsGridComponent implements OnInit {
    gridOptions: GridOptions
    transactionsData: any[];
    private subscription: Subscription;
    constructor(private as: AccountService, private td: TransactiosDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateGridData());
    }

    updateGridData() {
        let gridData: any[] = [];
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 12; col++) {
                gridData.push({
                    "holding filed 0": `item ${col}`
                })
            }
        }
        this.td.getTransactiosPerResolution(this.as.Account, Resolution.last12Monthes).then(i => { this.transactionsData = gridData });
    }

    ngOnInit() {
        let columns: Column[] = [];
        for (let i = 0; i < 3; i++)
            columns.push({ field: `holding filed ${i}` });
        this.gridOptions = { Columns: columns };
        this.updateGridData();


    }
}