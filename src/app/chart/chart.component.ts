import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartSetting } from '../model/chartModel';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() chartSetting!: chartSetting;

  public zoom?: Object;

  ngOnInit() {
    this.zoom = {
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true,
    };
  }
}
