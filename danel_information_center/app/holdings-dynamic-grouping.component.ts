import { Component, OnInit } from '@angular/core';
import { GridOptions, Holding, Column, GridData, HoldingsGroupType } from './models'
import { Subscription } from 'rxjs/Subscription';
import { AccountService, HoldingsDataService } from './services.barrel'
@Component({
    selector: 'holdings-dynamic-grouping',
    moduleId: module.id,
    templateUrl: './holdings-dynamic-grouping.component.html',
    styleUrls: ['./holdings-dynamic-grouping.component.css']
})
export class HoldingsDynamicGroupingComponent implements OnInit {
    gridOptions: GridOptions;
    holdingsGroupType: HoldingsGroupType
    holdingsData: any;
    chartData: any;
    chartType: string;
    private subscription: Subscription;
    chartOptions: Object;
    constructor(private as: AccountService, private hd: HoldingsDataService) {
        this.holdingsGroupType = HoldingsGroupType.AssetClass;
        this.subscription = this.as.account$.subscribe(
            () => this.updateData());
    }

    private updateData() {
        let data = [];
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
        let gridData: any[] = [];
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 12; col++) {
                gridData.push({
                    "holding filed 0": `item ${col}`
                })
            }
        }
        this.hd.getHoldingsByGroupMode(this.as.Account, this.holdingsGroupType).then(i => { this.holdingsData = gridData; this.chartData = chartData });
    }

    doGroupBy(holdingsGroupType: number) {

        this.holdingsGroupType = holdingsGroupType;
        this.updateData();
    }



    ngOnInit() {
        this.updateData();

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

        let columns: Column[] = [];
        for (let i = 0; i < 3; i++)
            columns.push({ field: `holding filed ${i}` });
        this.gridOptions = { Columns: columns };

    }
}