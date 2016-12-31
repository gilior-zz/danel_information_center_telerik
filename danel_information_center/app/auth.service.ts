import { Injectable } from '@angular/core';
import {LoginProperties} from './models';
import {AccountService, AdvisorService, UserService} from './services.barrel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {     Router   }      from '@angular/router';
@Injectable()
export class AuthService {
    constructor(private router: Router, private userService: UserService, private as: AccountService, private ads: AdvisorService) { }
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(name: string, pass: string): Observable<boolean> {
        this.userService.loginProperties = { name: name, idNumber: '123456789', mail: 'mail@mail.com', phone: '0534325434' };
        return Observable.of(true).delay(0).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.ads.dispose();
        this.as.dispose();
        this.isLoggedIn = false;
        this.router.navigate(['login']);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/