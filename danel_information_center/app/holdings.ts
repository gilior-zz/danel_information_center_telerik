import { Component } from '@angular/core';
import {HoldingsGroupType} from './models'
@Component({
    moduleId: module.id,
    templateUrl: './holdings.html'
})
export class HoldingsComponent {
    get holdingsGroupType(): HoldingsGroupType { return HoldingsGroupType.Detailed }

}