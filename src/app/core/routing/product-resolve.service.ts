import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { MockDataService } from '../mock-data';
import { Product } from '../../model';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {
    constructor(
        private dataService: MockDataService
    ) {}

    resolve(): Observable<Product[]> {
        return this.dataService.getMockProducts();
    }
}