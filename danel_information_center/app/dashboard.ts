import { Component, } from '@angular/core';
import {HoldingsGroupType} from './models'
@Component({
    moduleId: module.id,
    templateUrl: './dashboard.html',
    
})

export class DashboardComponent {
  



    get holdingsGroupType(): HoldingsGroupType { return HoldingsGroupType.Detailed}


}