import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() type: string = '';
  @Input() dataSource: Object[] = [];
  @Input() xName = '';
  @Input() yName = '';
  @Input() xAxis = {};
  @Input() name = '';
  @Input() radius = '70%';
  @Input() dataLabel = {};
  @Input() legendSettings = {};
  @Input() innerRadius = '20%';
}
