import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import * as _ from 'lodash';

import { ChartData, Product } from '../../model';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {
    private products = new BehaviorSubject<ChartData>(null);

    mockProducts: Product[] = [
        {
            name: 'Product 1',
            value: 10,
            color: '#ff6384'
        },
        {
            name: 'Product 2',
            value: 20,
            color: '#36a2eb'
        },
        {
            name: 'Product 3',
            value: 30,
            color: '#cc65fe'
        }
    ];
    productsStream = this.products.asObservable();

    getMockProducts() {
        return of(this.mockProducts);
    }

    searchProducts(term: string) {
        const loweredTerm: string = term.toLowerCase();
        const foundProducts = _.filter(this.mockProducts, (product: Product) => {
            return product.name.toLowerCase().indexOf(loweredTerm) >= 0;
        });
        return of(foundProducts);
    }

    setProducts(value: ChartData) {
        this.products.next(value);
    }
}