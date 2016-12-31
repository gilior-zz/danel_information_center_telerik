import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';
import { SummaryValuesService, pageNameService } from './services.barrel'
import { AccountProperties, PerformanceSummaryValues, TransactionsSummaryValues } from './models'
@Component({ selector: 'information-summary-panel', moduleId: module.id, templateUrl: 'information-summary-panel.component.html', styleUrls: ['./information-summary-panel.component.css'] })

export class InformationSummaryPanelComponent implements OnInit, OnDestroy {
    //public account: AccountProperties;
    private panelStructureSubscription: Subscription;
    private summaryValuesSubscription: Subscription;
    //public performance: PerformanceSummaryValues;
    //public transactions: TransactionsSummaryValues;
    isTransactionsStructure: boolean;
    isYieldStructure: boolean;
    hideInformationSummaryPanelComponent: boolean;
    constructor(public sv: SummaryValuesService, public pn: pageNameService) {

    }

    ngOnDestroy() {
        this.panelStructureSubscription.unsubscribe();
        //this.summaryValuesSubscription.unsubscribe();
    }


    get account(): AccountProperties { return this.sv.accountProperties; }
    get performance(): PerformanceSummaryValues { return this.sv.performanceSummaryValues; }
    get transactions(): TransactionsSummaryValues { return this.sv.transactionsSummaryValues; }




    clearStructure() {
        this.isTransactionsStructure = false;
        this.isYieldStructure = false;
        this.hideInformationSummaryPanelComponent = false;
    }

    setStructure() {
        switch (this.pn.currentPageName) {

            case "holdings":
            case "profile":
                this.hideInformationSummaryPanelComponent = true;
                break;
            case "dashboard":
            case "performance":
                this.isYieldStructure = true;
                break;
            case "transactions":
                this.isTransactionsStructure = true;
                break;
        }
    }

    updatePanelStructure() {
        this.clearStructure();
        this.setStructure();
    }

    ngOnInit() {
        this.panelStructureSubscription = this.pn.pageNameEvent$.subscribe(
            () => this.updatePanelStructure());
        //this.panelStructureSubscription = this.sv.summaryValues$.subscribe(
        //    () => this.updateSummaryValues());
    }

}

