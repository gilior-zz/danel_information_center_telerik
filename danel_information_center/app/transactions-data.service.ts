import { Injectable }   from '@angular/core';

import {HoldingsGroupType, AccountProperties, Resolution, AccountTransactionsUnits, TransactionUnit, TransactionsToResoltion} from './models'
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TransactiosDataService {
    private subscription: Subscription;


    public getTransactiosPerResolution(account: AccountProperties, resolution: Resolution, date?: Date): Promise<Array<TransactionUnit>> {
        return this.getData(account, resolution, date);
    }
    private savedTransactions: Array<AccountTransactionsUnits>;
    constructor() {
    }




    private getData(account: AccountProperties, resolution: Resolution, date?: Date): Promise<Array<TransactionUnit>> {
        let wait = false;


        //
        let savedTransactions = this.savedTransactions;
        if (savedTransactions == null)// no saved yields at all
            this.savedTransactions = new Array<AccountTransactionsUnits>();
        savedTransactions = this.savedTransactions;

        //
        let savedAccount = savedTransactions.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));
        if (savedAccount == null) // saved yields but not account
            savedTransactions.push({ entity: account, transactionsToResoltion: null });
        savedAccount = savedTransactions.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));

        //

        let transactionsToResoltion = savedAccount.transactionsToResoltion;
        if (transactionsToResoltion == null) //saved account but no units
            savedAccount.transactionsToResoltion = new Array<TransactionsToResoltion>();
        transactionsToResoltion = savedAccount.transactionsToResoltion;


        let transactions = transactionsToResoltion.find(i => i.resolution == resolution);
        if (transactions == null) //saved units but not resulotion
            transactionsToResoltion.push({ resolution: resolution, transactionsUnits: null });
        transactions = transactionsToResoltion.find(i => i.resolution == resolution);




        //
        let units = transactions.transactionsUnits;
        if (units == null) { // saved resolution but no units
            let transactionsUnits: Array<TransactionUnit> = new Array<TransactionUnit>();
            for (let i = 0; i < 50; i++)
                transactionsUnits.push({ amount: i, date: new Date(), quantity: i });
            transactions.transactionsUnits = transactionsUnits;
            wait = true;
        }

        return Observable.of(units).delay(wait ? 5000 : 0).toPromise();
    }
}