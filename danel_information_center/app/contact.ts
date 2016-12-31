import { Component } from '@angular/core';

import {LoginProperties} from './models'
import {UserService} from './services.barrel'
@Component({
    moduleId: module.id,
    templateUrl: './contact.html',
    styleUrls: ['./contact.css']
})
export class ContactComponent {
    validCaptcha: boolean;
    content: string;
    constructor(private userService: UserService) { }
    send() { }  

    setVerified(data) {
       
        setTimeout(this.validCaptcha = data, 0);

    }

    get loginProperties(): LoginProperties { return this.userService.loginProperties }
}