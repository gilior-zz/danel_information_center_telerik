import {Component, OnInit }   from '@angular/core';
import {AccountService, PerformanceDataService} from './services.barrel'
import {GridOptions, Holding, Column, GridData, Resolution} from './models'
import { Subscription }   from 'rxjs/Subscription';
@Component({ selector: 'performance-grid', moduleId: module.id, templateUrl: './performance-grid.component.html' })

export class PerformanceGridComponent implements OnInit {
    gridOptions: GridOptions
    performanceData: GridData;
    private subscription: Subscription;
    constructor(private as: AccountService, private pd: PerformanceDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateGridData());
    }

    updateGridData() {
        let data = [];
        for (let i = 0; i < 50; i++)
            data.push([new Date(), this.as.Account.ID || 999, this.as.Account.ID || 999, this.as.Account.ID || 999]);
        this.pd.getPerformancePerResolution(this.as.Account, Resolution.last12Monthes).then(i => { this.performanceData = { data: data } });
    }

    ngOnInit() {
        let columns: Column[] = [{ Caption: 'performanceDate', Type: 'date' }, { Caption: 'monthID', Type: 'number' }, { Caption: 'portfolioAmount', Type: 'number' }, { Caption: 'yield', Type: 'number' }]
        this.gridOptions = { Columns: columns };
        this.updateGridData();



    }
}