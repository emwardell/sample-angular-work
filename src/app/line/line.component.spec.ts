import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';

import { LineComponent } from './line.component';
import { DonutComponent } from '../donut';

describe('LineComponent', () => {
    let activatedRouteStub = {
        snapshot: { 
            params: {},
            data: {}
        }
    } as ActivatedRoute;
    let component: LineComponent;
    let fixture: ComponentFixture<LineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LineComponent,
                DonutComponent
            ],
            imports: [
                MatCardModule,
                MatFormFieldModule,
                MatInputModule,
                MatToolbarModule,
                ReactiveFormsModule
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LineComponent);
        component = fixture.componentInstance;
    });

    it('should display the header', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const element: HTMLElement = debugElement.nativeElement;
        const rizeHeader = element.querySelector('mat-toolbar');
        expect(rizeHeader).toBeDefined();
    });
});