import { MockDataService } from "./mock-data.service";

describe('MockDataService', () => {
    let service: MockDataService;

    beforeEach(() => {
        service = new MockDataService();
    });

    it('#searchProducts should find a product when searched', (done: DoneFn) => {
        const searchedProducts = [{
            name: 'Product 2',
            value: 20,
            color: '#36a2eb'
        }];
        service.mockProducts = [
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
        service.searchProducts(searchedProducts[0].name)
            .subscribe(value => {
                expect(value).toEqual(searchedProducts);
                done();
            });
    });
});