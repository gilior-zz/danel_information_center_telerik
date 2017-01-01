import {
    Component, Input, OnInit, HostBinding,
    trigger, transition, animate,
    style, state, TemplateRef, ViewContainerRef, ElementRef, OnChanges
} from '@angular/core';
import { GridOptions, GridData } from './models'
@Component({
    selector: 'danel-grid',
    moduleId: module.id,
    templateUrl: './grid.widget.html',

})
export class GridWidgetComponent implements OnInit, OnChanges {

    constructor(
        private el: ElementRef
    ) {

    }

    ngOnChanges() {
        if (this.gridData)
            console.log(this.gridData['data']);
    }
    @Input() public gridOptions: GridOptions;
    //@Input() public gridData: any;
    @Input() public gridData: any;
    @Input() public gridID: string;

    ngOnInit() {

    }





}