import {Component, HostListener,trigger,state,transition,style,group,animate,keyframes }   from '@angular/core';
import {pageNameService, AccountService, UserService} from './services.barrel'
import {Router} from '@angular/router'
import {LoginProperties} from './models'
import {AuthService} from './auth.service'
@Component({
    selector: 'information-center-menu', moduleId: module.id, templateUrl: './information-center-menu.component.html',
    styleUrls: ['./information-center-menu.component.css'],
  


})

export class InformationCenterMenuComponent {

    constructor(private pn: pageNameService, private authService: AuthService, private userService: UserService, private router: Router) { }

    get pageName(): string { return this.pn.currentPageName; }

    @HostListener('window:resize') onResize() {
        this.collapse = window.innerWidth < 768 ? 'collapse' : ''
        this.navbarCollapse = window.innerWidth < 768 ? '.navbar-collapse' : '';
    }

    get loginProperties(): LoginProperties { return this.userService.loginProperties }

    collapse: string = window.screen.width < 768 ? 'collapse' : ''
    navbarCollapse: string = window.screen.width < 768 ? '.navbar-collapse' : '';


    profile() { }

    logout() {
        this.authService.logout();
        //this.setMessage();
    }

}