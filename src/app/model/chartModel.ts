export interface chartSetting {
  dataSource?: any[];
  xName: string;
  yName: string;
  xAxis?: any;
  name?: string;
  radius?: string;
  marker?: string;
  dataLabel?: Object;
  legendSettings?: Object;
  innerRadius?: string;
  yAxis?: any;
}

export interface lineChartSetting {
  lineData?: chartSetting[];
  yAxis?: any;
  xAxis?: any;
}
