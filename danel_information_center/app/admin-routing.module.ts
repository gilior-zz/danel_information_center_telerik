import { Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { AdminHomeComponent } from './admin-home.component'

import { AdminCenterComponent } from './admin-center.component'
import { AuthGuard } from './auth-guard.service'
import { RouterModule } from '@angular/router'
const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: AdminHomeComponent,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'admin-center',
                        pathMatch: 'full'
                    },
                    {
                        path: 'admin-center',
                        component: AdminCenterComponent
                    }
                ]
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {


}