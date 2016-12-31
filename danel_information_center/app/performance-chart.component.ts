import {Component, OnInit }   from '@angular/core';
import {AccountService, PerformanceDataService} from './services.barrel'
import {Resolution} from './models'
import { Subscription }   from 'rxjs/Subscription';
@Component({ selector: 'performance-chart', moduleId: module.id, templateUrl: './performance-chart.component.html' })
export class PerformanceChartComponent implements OnInit {
    chartData: any;
    chartType: string;
    private subscription: Subscription;
    constructor(private as: AccountService, private pd: PerformanceDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateChartData());
    }
    chartOptions: Object;
    ngOnInit() {
        this.updateChartData();
        this.chartType = 'LineChart';
        this.chartOptions = {
            height: 400,
            title: 'performance',
            legend: {
                position: 'bottom'
            },
            curveType: 'function'
        };

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

        this.pd.getPerformancePerResolution(this.as.Account, Resolution.last12Monthes).then(i => { this.chartData = chartData });
    }
}