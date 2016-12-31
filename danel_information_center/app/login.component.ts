import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import {
    Router,
    NavigationExtras
} from '@angular/router';
import { AccountService, AdvisorService } from './services.barrel'
import { AuthService } from './auth.service';
import { User } from './models'
@Component({

    templateUrl: `./login.component.html`,
    moduleId: module.id,
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message: string;
    newUser: User;
    user: User;
    validCaptcha: boolean;
    constructor(public authService: AuthService, public router: Router, private as: AccountService, private ads: AdvisorService) {
        this.setMessage();
    }

    setVerified(data) {

        setTimeout(this.validCaptcha = data, 0);

    }

    ngOnInit() {
        this.newUser = {};
        this.user = {};
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }





    signIn() {
        this.message = 'Trying to log in ...';

        this.authService.login(this.user.name, this.user.password).subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
                let redirect = this.user.name == 'admin' ? 'admin-center' : 'information-center';

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };

                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

   


    logout() {
        this.ads.dispose();
        this.as.dispose();
        this.authService.logout();
        this.setMessage();
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/