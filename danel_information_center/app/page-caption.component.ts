import {Component, OnInit, OnDestroy} from '@angular/core'
import {pageNameService} from './services.barrel'
import { Subscription }   from 'rxjs/Subscription';
@Component({ selector: 'page-caption', moduleId: module.id, templateUrl: './page-caption.component.html' })


export class pageCaptionComponent implements OnInit, OnDestroy {
    //pageName: string;
    private subscription: Subscription;
    constructor(public pn: pageNameService) {
        //this.subscription = this.pn.pageNameEvent$.subscribe(
        //    () => this.updatePageName());
    }

    ngOnInit() {
        //this.updatePageName()
    }
    get pageName(): string { return this.pn.currentPageName; }


    ngOnDestroy() {
        //this.subscription.unsubscribe();
    }
    //updatePageName() {
    //    this.pageName = this.pn.currentPageName;
    //}

}