import { Injectable }   from '@angular/core';

import {HoldingsGroupType, AccountProperties, Resolution, AccountPerformanceUnits, PerformanceUnit, PerformanceToResoltion} from './models'
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PerformanceDataService {
    private subscription: Subscription;


    public getPerformancePerResolution(account: AccountProperties, resolution: Resolution): Promise<Array<PerformanceUnit>> {
        return this.getData(account, resolution);
    }
    private savedYields: Array<AccountPerformanceUnits>;
    constructor() {
    }




    private getData(account: AccountProperties, resolution: Resolution): Promise<Array<PerformanceUnit>> {
        let wait = false;


        //
        let savedYields = this.savedYields;
        if (savedYields == null)// no saved yields at all
            this.savedYields = new Array<AccountPerformanceUnits>();
        savedYields = this.savedYields;

        //
        let savedAccount = savedYields.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));
        if (savedAccount == null) // saved yields but not account
            savedYields.push({ entity: account, performancesToResoltion: null });
        savedAccount = savedYields.find(i => (account.isAggregate ? i.entity.isAggregate : i.entity.ID == account.ID));

        //

        let performancesToResoltion = savedAccount.performancesToResoltion;
        if (performancesToResoltion == null) //saved account but no units
            savedAccount.performancesToResoltion = new Array<PerformanceToResoltion>();
        performancesToResoltion = savedAccount.performancesToResoltion;


        let performances = performancesToResoltion.find(i => i.resolution == resolution);
        if (performances == null) //saved units but not resulotion
            performancesToResoltion.push({ resolution: resolution, performanceUnits: null });
        performances = performancesToResoltion.find(i => i.resolution == resolution);




        //
        let units = performances.performanceUnits;
        if (units == null) { // saved resolution but no units
            let performanceUnits: Array<PerformanceUnit> = new Array<PerformanceUnit>();
            for (let i = 0; i < 50; i++)
                performanceUnits.push({ date: new Date(), amount: i, net: i });
            performances.performanceUnits = performanceUnits;
            wait = true;
        }

        return Observable.of(units).delay(wait ? 5000 : 0).toPromise();
    }
}