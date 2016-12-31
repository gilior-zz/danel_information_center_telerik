import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountResolve } from './account-resolve.service'
import { InformationCenterComponent } from './information-center.component'
import { AuthGuard } from './auth-guard.service';
import * as   components from './components.barrel'


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: InformationCenterComponent,
                canActivate: [AuthGuard],
                resolve: [AccountResolve],
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuard],
                        children: [
                           
                            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },                           
                            { path: 'dashboard', component: components.DashboardComponent },
                            { path: 'holdings', component: components.HoldingsComponent },
                            { path: 'performance', component: components.PerformanceComponent },
                            { path: 'transactions', component: components.TransactionsComponent },
                            { path: 'contact', component: components.ContactComponent },
                            { path: 'profile', component: components.ProfileComponent },

                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [AccountResolve]
})

export class InformationCcenterRoutingModule { }


