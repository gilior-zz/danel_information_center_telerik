import { Component, animate, trigger, transition, style, state, OnDestroy } from '@angular/core';
import { UserService } from './services.barrel'
import { LoginProperties } from './models'
@Component({
    moduleId: module.id,
    templateUrl: './profile.html',
    styleUrls: ['./profile.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('* => void', [
                animate(1000, style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('passwordLabel', [
            state('inactive', style({
                transform: 'rotateY(360deg)'
            })),
            state('active', style({
                transform: 'rotateY(0deg)'
            })),
            transition('inactive <=> active', animate(1000))
        ])
    ]

})
export class ProfileComponent implements OnDestroy {
    submittesSuccessfuly: boolean;
    constructor(private userService: UserService) { }
    send() { }
    currentPassword: string;
    newPasswordValidation: string;
    newPassword: string;
    validCaptcha: boolean;
    get loginProperties(): LoginProperties { return this.userService.loginProperties }
    setVerified(data) {
        setTimeout(this.validCaptcha = data, 0);
    }
    onChangePassword() {
        this.submittesSuccessfuly = true;
    }

    onUpdatePasswordModelOpen() {
        //this.newPassword = '';
        //this.newPasswordValidation = '';
        //this.currentPassword = '';
        this.submittesSuccessfuly = false;
    }

    ngOnDestroy() { this.submittesSuccessfuly = false; }

    onNewPasswordChanged(val: string) {
        this.newPasswordValidation = '';
        this.newPassword = val;
    }

    state: string = 'inactive';
    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
}