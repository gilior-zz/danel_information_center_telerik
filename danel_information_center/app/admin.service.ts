import { Injectable } from '@angular/core'
import { User } from './models'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class AdminService {
    users: Array<User>;
    constructor() {
        this.users = new Array<User>();

    }
    getUsers(): Observable<User[]> {
        console.log('inside getUsers')
        if (this.users != null)
            return Observable.of(this.users);
        for (let i = 0; i < 50; i++) {
            let u: User = { email: '', idNumber: i, name: `user ${i}`, birthday: new Date(), phone: (99999 - i ^ 10).toString() };
            this.users.push(u);
            return Observable.of(this.users).delay(5000);
        }
    }


}