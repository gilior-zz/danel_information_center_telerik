import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from './auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'information-center',
                loadChildren: 'app/information-center.module#InformationCenterModule',

            },
            {
                path: 'admin-center',
                loadChildren: 'app/admin-center.module#AdminModule',

            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ], { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/