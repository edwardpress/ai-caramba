import { PanelModel } from '@syncfusion/ej2-angular-layouts';
import { panelData } from './model/panelModel';

export const lineData: any[] = [
  { x: 2013, y: 28 },
  { x: 2014, y: 25 },
  { x: 2015, y: 26 },
  { x: 2016, y: 27 },
  { x: 2017, y: 32 },
  { x: 2018, y: 35 },
];

export const piechart: any[] = [
  { x: 'TypeScript', y: 13, text: 'TS 13%' },
  { x: 'React', y: 12.5, text: 'Reat 12.5%' },
  { x: 'MVC', y: 12, text: 'MVC 12%' },
  { x: 'Core', y: 12.5, text: 'Core 12.5%' },
  { x: 'Vue', y: 10, text: 'Vue 10%' },
  { x: 'Angular', y: 40, text: 'Angular 40%' },
];

export const piechart1: any[] = [
  { x: 'Chrome', y: 37, text: '37%' },
  { x: 'UC Browser', y: 17, text: '17%' },
  { x: 'iPhone', y: 19, text: '19%' },
  { x: 'Others', y: 4, text: '4%' },
  { x: 'Opera', y: 11, text: '11%' },
  { x: 'Android', y: 12, text: '12%' },
];

export let barData: Object[] = [
  { x: 2006, y: 7.8 },
  { x: 2007, y: 7.2 },
  { x: 2008, y: 6.8 },
  { x: 2009, y: 10.7 },
  { x: 2010, y: 10.8 },
  { x: 2011, y: 9.8 },
];

export const sampleData: panelData[] = [
  {
    title: 'Bar',
    chartSetting: {
      dataSource: barData,
      xName: 'x',
      yName: 'y',
      type: 'Bar',
      xAxis: {
        valueType: 'Category',
      },
    },
    description: 'Bar Data',
    row: 0,
    col: 0,
  },
  {
    title: 'Line',
    chartSetting: {
      dataSource: lineData,
      xName: 'x',
      yName: 'y',
      type: 'Line',
      xAxis: {
        valueType: 'Category',
      },
    },
    description: 'Line Data',
    row: 0,
    col: 3,
  },

  {
    title: 'Pie',
    chartSetting: {
      dataSource: piechart1,
      xName: 'x',
      yName: 'y',
      type: 'Pie',
      xAxis: {
        valueType: 'Category',
      },
      innerRadius: '20%',
    },
    description: 'Pie Data',
    row: 1,
    col: 0,
  },
  {
    title: 'Pie 2',
    chartSetting: {
      dataSource: piechart,
      xName: 'x',
      yName: 'y',
      type: 'Pie',
      xAxis: {
        valueType: 'Category',
      },
      radius: '70%',
    },
    description: 'Pie Data',
    row: 1,
    col: 3,
  },
];
