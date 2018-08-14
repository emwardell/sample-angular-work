import { AfterViewInit, Component, Input } from '@angular/core';
import Chart from 'chart.js';

import { ChartData } from '../model';

@Component({
    selector: 'donut',
    templateUrl: './donut.component.html'
})
export class DonutComponent implements AfterViewInit {
    chart: any = [];

    @Input()
    data: ChartData;

    ngAfterViewInit() {
        this.chart = new Chart('canvas', {
            type: 'pie',
            data: this.data,
            options: {
              cutoutPercentage: 50
            }
          });
    }
}