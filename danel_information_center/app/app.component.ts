import { Component, OnInit } from '@angular/core';
import {ParameterService} from './services.barrel'
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private ps: ParameterService) {

    }
    ngOnInit() {

    }
}
