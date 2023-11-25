import { Component, Input } from '@angular/core';
import { data0, data1, data2, data3 } from '../dummyData';

import { chartSetting, lineChartSetting } from '../model/chartModel';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() chartSetting?: chartSetting;
  @Input() type!: string;
  @Input() lineChartSetting?: lineChartSetting;

  public zoom?: Object;
  marker = { visible: true };

  ngOnInit() {
    this.zoom = {
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true,
    };
  }
}
