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

export let data0: Object[] = [
  { x: 'Food', y: 90 },
  { x: 'Transport', y: 80 },
  { x: 'Medical', y: 50 },
  { x: 'Clothes', y: 70 },
  { x: 'Personal Care', y: 30 },
  { x: 'Books', y: 10 },
  { x: 'Fitness', y: 100 },
  { x: 'Electricity', y: 55 },
  { x: 'Tax', y: 20 },
  { x: 'Pet Care', y: 40 },
  { x: 'Education', y: 45 },
  { x: 'Entertainment', y: 75 },
];
export let data1: Object[] = [
  { x: 'Food', y: 40 },
  { x: 'Transport', y: 90 },
  { x: 'Medical', y: 80 },
  { x: 'Clothes', y: 30 },
  { x: 'Personal Care', y: 80 },
  { x: 'Books', y: 40 },
  { x: 'Fitness', y: 30 },
  { x: 'Electricity', y: 95 },
  { x: 'Tax', y: 50 },
  { x: 'Pet Care', y: 20 },
  { x: 'Education', y: 15 },
  { x: 'Entertainment', y: 45 },
];
export let data2: Object[] = [
  { x: 'Food', y: 70 },
  { x: 'Transport', y: 110 },
  { x: 'Medical', y: 120 },
  { x: 'Clothes', y: 60 },
  { x: 'Personal Care', y: 80 },
  { x: 'Books', y: 30 },
  { x: 'Fitness', y: 70 },
  { x: 'Electricity', y: 55 },
  { x: 'Tax', y: 40 },
  { x: 'Pet Care', y: 80 },
  { x: 'Education', y: 45 },
  { x: 'Entertainment', y: 65 },
];
export let data3: Object[] = [
  { x: 'Food', y: 120 },
  { x: 'Transport', y: 70 },
  { x: 'Medical', y: 50 },
  { x: 'Clothes', y: 180 },
  { x: 'Personal Care', y: 30 },
  { x: 'Books', y: 270 },
  { x: 'Fitness', y: 40 },
  { x: 'Electricity', y: 75 },
  { x: 'Tax', y: 65 },
  { x: 'Pet Care', y: 95 },
  { x: 'Education', y: 135 },
  { x: 'Entertainment', y: 115 },
];

export const sampleData: panelData[] = [
  {
    title: 'Bar',
    type: 'Bar',
    chartSetting: {
      dataSource: barData,
      xName: 'x',
      yName: 'y',
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
    type: 'Line',
    chartSetting: {
      dataSource: lineData,
      xName: 'x',
      yName: 'y',
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
    type: 'Pie',
    chartSetting: {
      dataSource: piechart1,
      xName: 'x',
      yName: 'y',
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
    type: 'Pie',
    chartSetting: {
      dataSource: piechart,
      xName: 'x',
      yName: 'y',
      xAxis: {
        valueType: 'Category',
      },
      radius: '70%',
    },
    description: 'Pie Data',
    row: 1,
    col: 3,
  },

  {
    title: 'Multi Line',
    type: 'StackingLine',
    description: 'Pie Data',
    row: 2,
    col: 0,
    sizeX: 6,
    lineChartSetting: {
      xAxis: { interval: 1, valueType: 'Category' },
      yAxis: {
        title: 'Expense',
        interval: 100,
        labelFormat: '${value}',
      },
      lineData: [
        {
          dataSource: data0,
          xName: 'x',
          yName: 'y',
          name: 'Peter',
        },
        {
          dataSource: data1,
          xName: 'x',
          yName: 'y',
          name: 'Jon',
        },
        {
          dataSource: data2,
          xName: 'x',
          yName: 'y',
          name: 'Lance',
        },
        {
          dataSource: data3,
          xName: 'x',
          yName: 'y',
          name: 'Lim',
        },
      ],
    },
  },
];

// this.primaryXAxis = {
//   interval: 1, valueType: 'Category'
// };
// this.primaryYAxis =
// {
//   title: 'Expense',
//   interval: 100,
//   labelFormat: '${value}',
// },
