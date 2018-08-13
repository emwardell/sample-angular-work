import { Component } from '@angular/core';

import { ChartData } from './donut';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  batchSummaryData: ChartData = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe'
        ]
      }
    ],
    labels: [
      'Product 1',
      'Product 2',
      'Product 3'
    ]
  };
  lineName: string = 'Line 2';
}