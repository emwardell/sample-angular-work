import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DonutComponent } from './donut';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
