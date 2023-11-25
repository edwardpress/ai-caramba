import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  ChartAllModule,
  AccumulationChartAllModule,
} from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from './chart/chart.component';
import {
  CategoryService,
  LegendService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import {
  DataLabelService,
  LineSeriesService,
} from '@syncfusion/ej2-angular-charts';

@NgModule({
  imports: [
    BrowserModule,
    DashboardLayoutModule,
    RouterModule,
    CommonModule,
    ChartAllModule,
    AccumulationChartAllModule,
  ],
  declarations: [AppComponent, DashboardComponent, ChartComponent],
  bootstrap: [AppComponent],
  providers: [
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    LineSeriesService,
  ],
})
export class AppModule {}
