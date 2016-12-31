import { Injectable } from '@angular/core';

import { HoldingsGroupType, AccountHoldingsGroupsUnits, AccountProperties, HoldingsToGroup, HoldingGroupUnit } from './models'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HoldingsDataService {
    private subscription: Subscription;


    public getHoldingsByGroupMode(account: AccountProperties, holdingsGroupType: HoldingsGroupType): Promise<Array<HoldingGroupUnit>> {
        return this.getData(account, holdingsGroupType);
    }
    private savedHoldings: Array<AccountHoldingsGroupsUnits>;
    constructor() {
    }

    private getData(account: AccountProperties, holdingsGroupType: HoldingsGroupType): Promise<Array<HoldingGroupUnit>> {
        let wait = false;


        //
        let savedHoldings = this.savedHoldings;
        if (savedHoldings == null)// no saved holdings at all
            this.savedHoldings = new Array<AccountHoldingsGroupsUnits>();
        savedHoldings = this.savedHoldings;

        //
        let savedAccount = savedHoldings.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));
        if (savedAccount == null) //saved but no account data
            savedHoldings.push({ entity: account, units: null });
        savedAccount = savedHoldings.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));

        //
        let units = savedAccount.units;
        if (units == null) // account data but no units stored
            savedAccount.units = new Array<HoldingsToGroup>();
        units = savedAccount.units;

        //
        let holdingsPerGrouping = units.find(i => i.holdingsGroupType == holdingsGroupType);
        if (holdingsPerGrouping == null) // units but not detailed
        {
            let holdingGroupUnit: Array<HoldingGroupUnit> = new Array<HoldingGroupUnit>();
            for (let i = 0; i < 50; i++)
                holdingGroupUnit.push({ itemID: i, amount: (50 - i) * 3, itemName: `Item ${i}` });
            holdingsPerGrouping = { holdingsGroupType: holdingsGroupType, units: holdingGroupUnit };
            units.push(holdingsPerGrouping);
            wait = true;
        }

        return Observable.of(holdingsPerGrouping.units).delay(wait ? 5000 : 0).toPromise();
    }
}