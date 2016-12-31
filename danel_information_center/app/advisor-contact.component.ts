import { Component, OnInit, Input, trigger, style, animate, transition, state } from '@angular/core';
import { AdvisorProperties } from './models'
import { AdvisorService } from './services.barrel'
import { AuthService } from './auth.service'

@Component({
    selector: 'advisor-contact',
    moduleId: module.id,
    templateUrl: './advisor-contact.component.html',
    styleUrls: ['./advisor-contact.component.css'],
    animations: [
        trigger('arrow', [
            state('inactive', style({
                transform: 'rotateX(180deg)'
            })),
            state('active', style({
                transform: 'rotateX(0deg)'
            })),
            transition('inactive <=> active', animate('1s ease-out'))
        ])
    ]




})
export class AdvisorContactComponent {
    constructor(private as: AdvisorService, private aus: AuthService) {
        //$('[data-toggle="popover"]').popover()
    }

    _content: string;
    submmited: boolean;
    customMessage: boolean;
    ind: number;
    get advisorProperties(): AdvisorProperties { return this.as.advisorProperties }
    get builtInMessages(): Array<string> { return this.as.builtInMessages };
    message: string;


    onMouseover() { console.log('onMouseover'); }

    state: string = 'inactive';
    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }


    get isLoggedIn(): boolean { return this.aus.isLoggedIn }

    onSubmit() {
        this.submmited = !this.submmited;
        console.log(this._content || this.message);
    }
}