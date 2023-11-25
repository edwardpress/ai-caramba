import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenAiService } from './service/open-ai.service';
import { DashboardDataService } from './service/dashboard-data.service';
import { sampleData } from './dummyData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private chatGPT: OpenAiService,
    private dashboardData: DashboardDataService
  ) {
    const userBalance = sampleData[0];
    console;
    this.dashboardData.updateGraph(userBalance);
  }
}
