import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductResolver } from './core/routing';
import { LineComponent } from './line';

const routes: Routes = [
    {
        path: '',
        component: LineComponent,
        resolve: {
            products: ProductResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}