import { chartSetting, lineChartSetting } from './chartModel';

export interface panelData {
  title: string;
  chartSetting?: chartSetting;
  lineChartSetting?: lineChartSetting;
  description?: string;
  sizeX?: number;
  sizeY?: number;
  row: number;
  col: number;
  type: string;
}
