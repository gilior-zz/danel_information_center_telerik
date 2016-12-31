import {
    ModuleWithProviders, NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageNameService, SummaryValuesService, AccountService, ParameterService, PerformanceDataService, TransactiosDataService, UserService, AdvisorService, AdminService } from './services.barrel'
import { } from ''
import { HoldingsDataService } from './holdings-data.service'
@NgModule({
    providers: [AccountService, pageNameService, SummaryValuesService, ParameterService, HoldingsDataService, PerformanceDataService, TransactiosDataService, UserService, AdvisorService, AdminService]
})
export class CoreModule {
}
