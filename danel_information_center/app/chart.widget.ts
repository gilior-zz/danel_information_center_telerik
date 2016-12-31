import { Component, Input, HostBinding,
    trigger, transition, animate,
    style, state, OnDestroy, OnInit, OnChanges } from '@angular/core';


//import { ChartComponent } from 'angular2-highcharts';
@Component({
    selector: 'danel-chart',
    moduleId: module.id,
    templateUrl: './chart.widget.html',
})
export class ChartWidgetComponent implements OnChanges {

    @Input() public chartType: string;
    @Input() public chartOptions: Object;
    @Input() public chartData: Object;
    @Input() public chartID: string;

    ngOnChanges() {
        //console.log('in ngOnChanges');
    }


}