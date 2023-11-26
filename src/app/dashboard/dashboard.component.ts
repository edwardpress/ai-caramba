import { Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DashboardLayoutComponent,
  PanelModel,
} from '@syncfusion/ej2-angular-layouts';
import {
  lineData,
  piechart,
  piechart1,
  barData,
  sampleData,
} from '../dummyData';
import { DashboardDataService } from '../service/dashboard-data.service';
import { IntroJSService } from '../service/intro-js.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  lineData: any[] = lineData;
  pieChart: any[] = piechart;
  pieChart1: any[] = piechart1;
  barData: any[] = barData;
  samplePanels = sampleData;
  panels: any[] = [];
  primaryXAxis: Object = {
    valueType: 'Category',
  };

  constructor(private dashboardData: DashboardDataService,     private introService: IntroJSService
    ) {}

  public cellSpacing: number[] = [10, 10];

  public legendSettings: Object = {
    visible: false,
  };
  tooltip: any;
  datalabel: any;

  chartParameter = [{}];

  ngOnInit() {
    this.dashboardData.getCurrentGraph.subscribe((res) => {
      console.log('res', res);
      this.panels = res;
    });
  }

  deleteDashboard(index: number) {
    this.dashboardData.deleteGraph(index);
  }

  highlightIntro(){
    this.introService.featureOne()
  }
}
