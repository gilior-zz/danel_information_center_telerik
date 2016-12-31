import { Component, OnInit } from '@angular/core'
import { AdminService } from './services.barrel'
import { User, GridOptions } from './models'


@Component({ templateUrl: './admin-center.component.html', styleUrls: ['./admin-center.component..css'], moduleId: module.id })

export class AdminCenterComponent implements OnInit {
    gridOptions: GridOptions;
    constructor(private as: AdminService) {

    }

    ngOnInit() {
        let cols = [];
        for (let i = 0; i < 4; i++)
            cols.push({ Caption: `column${i}`, Type: 'number' });
        this.gridOptions = { Columns: cols };

        let data = [];
        this.as.getUsers().subscribe(i => i.forEach(i => data.push(i.name, i.email, i.birthday, i.idNumber)))


    }



}