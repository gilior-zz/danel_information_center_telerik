import { Component, OnInit, trigger, state, transition, animate, keyframes, style } from '@angular/core';
import { ParameterService } from './services.barrel'
import { AdvisorProperties } from './models'
import { AuthService } from './auth.service'
import { Parameter } from './models'
import { AdvisorService } from './services.barrel'
@Component({
    selector: 'main-site-header', moduleId: module.id, templateUrl: './main-site-header.component.html', styleUrls: ['./main-site-header.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                animate('1s', keyframes([
                    style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                ]))
            ]),
            transition('* => void', [
                animate('1s', keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
                    style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                ]))
            ])
        ])
    ]
})

export class MainSiteHeaderComponent implements OnInit {
    constructor(private ps: ParameterService, private aus: AuthService, private as: AdvisorService) {
    }

    ngOnInit() {
        this.as.loadAdvisor();
    }

    get advisorProperties(): AdvisorProperties { return this.as.advisorProperties }

    get companyName(): string { return this.ps.getParameter(Parameter.CompanyDisplayName); }

    get isLoggedIn(): boolean { return this.aus.isLoggedIn; }
}