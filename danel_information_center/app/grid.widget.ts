import {
    Component, Input, OnInit, HostBinding,
    trigger, transition, animate,
    style, state, TemplateRef, ViewContainerRef, ElementRef, OnChanges
} from '@angular/core';
import { GridOptions, GridData,Column } from './models'
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
       
    }
    @Input() public gridOptions: GridOptions;
    //@Input() public gridData: any;
    @Input() public gridData: any;
    @Input() public gridID: string;

    ngOnInit() {

    }

    get columns(): Column[] {
        console.log(this.gridOptions.Columns);
        return this.gridOptions.Columns;
    }

    private hiddenColumns: string[] = [];

    private restoreColumns(): void {
        this.hiddenColumns.length = 0;
    }

    private hideColumn(field: string): void {
        this.hiddenColumns.push(field);
    }





}