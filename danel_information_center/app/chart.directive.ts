import {Directive, ElementRef, Input, OnInit, HostListener, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
@Directive({
    selector: '[GoogleChart]'

})
export class GoogleChart implements OnInit, OnDestroy, OnChanges {
    public _element: any;
    @Input('chartType') public chartType: string;
    @Input('chartOptions') public chartOptions: Object;
    @Input('chartData') public chartData: Object;
    constructor(public element: ElementRef) {
        this._element = this.element.nativeElement;
    }


    @HostListener('window:resize') onMouseEnter() {
        this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
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

        setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element), 0);

    }




    ngOnInit() {
        //if (!googleLoaded) {
        //    googleLoaded = true;
        //    google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
        //}
        google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
        setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element), 0);
        //this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
    }

    drawGraph(chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            wrapper.draw();
        }
    }
}

