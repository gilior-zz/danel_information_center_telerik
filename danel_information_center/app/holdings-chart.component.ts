import {Component, OnInit, OnDestroy, Input }   from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {HoldingsGroupType} from './models'
//import {HoldingsDataService} from './holdings-data.service'
import {AccountService, HoldingsDataService} from './services.barrel'
@Component({ selector: 'holdings-chart', moduleId: module.id, templateUrl: './holdings-chart.component.html' })
export class HoldingsChartComponent implements OnInit, OnDestroy {
    chartData: any;
    chartType: string;
    private subscription: Subscription;
    chartOptions: Object;
    constructor(private as: AccountService, private hd: HoldingsDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateChartData());
    }

    @Input() holdingsGroupType: HoldingsGroupType


    ngOnInit() {
        this.updateChartData();

        this.chartType = 'PieChart';

        this.chartOptions = {
            title: 'holdings',
            //pieHole: 0.1,
            height: 400,
            is3D: true
            //curveType: 'function',
            //legend: {
            //    position: 'bottom'
            //}
        };

    }





    ngOnDestroy() {

        this.subscription.unsubscribe();
    }



    private updateChartData() {
        //console.log(`in updateChartData account:${this.as.Account.isAggregate}`);
        let num = this.as.Account.ID == null ? 50 : this.as.Account.ID;
        let i = 3;

        let chartData = [
            //['Year', 'Sales'],
            ['Asset', 'Amount'],
            ['A', num ^= i++],
            ['B', num ^= i++],
            ['C', num ^= i++],
            ['D', num ^= i++],
            ['E', num ^= i++]];

        this.hd.getHoldingsByGroupMode(this.as.Account, this.holdingsGroupType).then(i => { this.chartData = chartData });

    }
}