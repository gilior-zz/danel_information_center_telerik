import { Component, OnInit } from '@angular/core';
import { GridOptions, Holding, Column, GridData, HoldingsGroupType } from './models'
import { AccountService } from './services.barrel'
import { HoldingsDataService } from './holdings-data.service'
import { Subscription } from 'rxjs/Subscription';
@Component({ selector: 'holdings-grid', moduleId: module.id, templateUrl: './holdings-grid.component.html' })

export class HoldingsGridComponent implements OnInit {
    gridOptionslg: GridOptions;
    gridOptionsmd: GridOptions;
    gridOptionssm: GridOptions;
    gridOptionsxs: GridOptions;
    private subscription: Subscription;
    holdingsDatalg: GridData;
    holdingsDatamd: GridData;
    holdingsDatasm: GridData;
    holdingsDataxs: GridData;
    constructor(private as: AccountService, private hd: HoldingsDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateGridData());
    }
    private gridData: any[] = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": true
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": false
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10.0000,
        "Discontinued": false
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22.0000,
        "Discontinued": false
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.3500,
        "Discontinued": false
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25.0000,
        "Discontinued": false
    }];



    updateGridData() {
        let datalg = new Array();
        let datamd = new Array();
        let datasm = new Array();
        let dataxs = new Array();


        for (let i = 0; i < 20; i++) {
            datalg[i] = new Array<number>();
            for (let j = 0; j < 12; j++)
                datalg[i].push(this.as.Account.ID || 999);
        }

        for (let i = 0; i < 20; i++) {
            datamd[i] = new Array<number>();
            for (let j = 0; j < 9; j++)
                datamd[i].push(this.as.Account.ID || 999);
        }
        for (let i = 0; i < 20; i++) {
            datasm[i] = new Array<number>();
            for (let j = 0; j < 6; j++)
                datasm[i].push(this.as.Account.ID || 999);
        }
        for (let i = 0; i < 20; i++) {
            dataxs[i] = new Array<number>();
            for (let j = 0; j < 3; j++)
                dataxs[i].push(this.as.Account.ID || 999);
        }

        this.hd.getHoldingsByGroupMode(this.as.Account, HoldingsGroupType.Detailed).then(i => {
            this.holdingsDatalg = { data: this.gridData };
            this.holdingsDatamd = { data: this.gridData };
            this.holdingsDatasm = { data: this.gridData };
            this.holdingsDataxs = { data: this.gridData };
            console.log(this.gridData);
        });
    }




    ngOnInit() {

        let lgCols = [];
        let mdCols = [];
        let smCols = [];
        let xsCols = [];

        for (let i = 0; i < 12; i++)
            lgCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 9; i++)
            mdCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 6; i++)
            smCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 3; i++)
            xsCols.push({ Caption: `column${i}`, Type: 'number' });

        this.gridOptionslg = { Columns: lgCols };
        this.gridOptionsmd = { Columns: mdCols };
        this.gridOptionssm = { Columns: smCols };
        this.gridOptionsxs = { Columns: xsCols };
        this.updateGridData();
        //let data = [];
        //for (let i = 0; i < 50; i++)
        //    data.push([this.as.Account.ID || 999, this.as.Account.ID || 999, `item ${this.as.Account.ID || 999}`]);
        //this.hd.getHoldingsByGroupMode(this.as.Account, HoldingsGroupType.Detailed).then(i => { this.holdingsData = { data: data } });
    }
}