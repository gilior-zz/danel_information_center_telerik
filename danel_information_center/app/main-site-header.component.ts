import { Component, OnInit } from '@angular/core';
import { ParameterService } from './services.barrel'
import { AdvisorProperties } from './models'
import { AuthService } from './auth.service'
import { Parameter } from './models'
import { AdvisorService } from './services.barrel'
@Component({ selector: 'main-site-header', moduleId: module.id, templateUrl: './main-site-header.component.html', styleUrls: ['./main-site-header.component.css'] })

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