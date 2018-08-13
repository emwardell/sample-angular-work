import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { DonutComponent } from './donut';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DonutComponent
            ],
            imports: [
                MatCardModule,
                MatToolbarModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should display the header', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const element: HTMLElement = debugElement.nativeElement;
        const rizeHeader = element.querySelector('mat-toolbar');
        expect(rizeHeader).toBeDefined();
    });
});