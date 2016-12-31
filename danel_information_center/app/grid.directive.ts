import {Directive, ElementRef, Input, OnInit, HostListener, OnDestroy, SimpleChanges, OnChanges} from '@angular/core';
import {GridOptions, GridData} from './models'
declare var google: any;
declare var googleLoaded: any;
@Directive({
    selector: '[GoogleGrid]'
})
export class GridDirective implements OnInit, OnDestroy, OnChanges {
    public _element: any;

    @Input('gridOptions') public gridOptions: GridOptions;
    @Input('gridData') public gridData: any;
    constructor(public element: ElementRef) {
        this._element = this.element.nativeElement;
    }

    ngOnDestroy() {
        googleLoaded = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        //for (let propName in changes) {
        //    let chng = changes[propName];
        //    let cur = JSON.stringify(chng.currentValue);
        //    let prev = JSON.stringify(chng.previousValue);
        //    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        //}

        //console.log(JSON.stringify(this.chartData));

        setTimeout(() => this.drawGraph(this.gridOptions, this.gridData, this._element), 1000);
    }


    @HostListener('window:resize') onMouseEnter() {
        this.drawGraph(this.gridOptions, this.gridData, this._element);
    }
    ngOnInit() {
        //if (!googleLoaded) {
        //    googleLoaded = true;
        //    google.charts.load('current', { 'packages': ['table'] });
        //}
        google.charts.load('current', { 'packages': ['table'] });
        setTimeout(() => this.drawGraph(this.gridOptions, this.gridData, this._element), 1000);
        //this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
    }

    drawGraph(gridOptions: GridOptions, gridData: GridData, ele) {
        google.charts.setOnLoadCallback(drawTable);

        function drawTable() {
            var data = new google.visualization.DataTable();
            gridOptions.Columns.forEach(col => {
                data.addColumn(col.Type, col.Caption);
            });
            data.addRows(gridData.data);


            var table = new google.visualization.Table(ele);


            table.draw(data, { showRowNumber: false, width: '100%', height: '100%' });
        }
    }
}

