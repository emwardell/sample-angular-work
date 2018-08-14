import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ChartData, Product } from '../model';
import { MockDataService } from '../core/mock-data';

@Component({
    styleUrls: ['./line.component.css'],
    templateUrl: './line.component.html'
})
export class LineComponent implements OnInit {
    batchSummaryData: ChartData;
    filteredProducts: Product[];
    labels = {
        search: 'Type to search records'
    };
    lineName: string = 'Line 2';
    lineForm: FormGroup;

    constructor(
        private dataService: MockDataService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const initialProducts = this.route.snapshot.data['products'];
        const labels = [];
        const data = [];
        const backgroundColors = [];
        const chartData: ChartData = {};
        initialProducts.forEach(product => {
            labels.push(product.name);
            data.push(product.value);
            backgroundColors.push(product.color);
        });
        chartData.datasets = [
            { 
                data: data,
                backgroundColor: backgroundColors
            }
        ];
        chartData.labels = labels;
        this.dataService.setProducts(chartData);

        this.dataService.productsStream
            .subscribe(data => {
                this.batchSummaryData = data;
            });

        this.buildForm();
      }

      private buildForm() {
        this.lineForm = this.formBuilder.group({
            searchText: [null, []]
        });

        this.lineForm.valueChanges
            .pipe(
                debounceTime(2000),
                distinctUntilChanged(),
                switchMap(value => this.search(value.searchText))
            ).subscribe(data => {
                this.filteredProducts = data;
            });
      }

      private search(term: string) {
          return this.dataService.searchProducts(term);
      }
}