import { chartSetting } from './chartModel';

export interface panelData {
  title: string;
  chartSetting: chartSetting;
  description?: string;
  sizeX?: number;
  sizeY?: number;
  row: number;
  col: number;
}
