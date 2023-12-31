import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  currentGraphs = new BehaviorSubject<any>([]);
  constructor() {}

  updateGraph(data: any) {
    let updatedValue = [...this.currentGraphs.value, data];

    updatedValue = updatedValue.map((res, i) => {
      return {
        ...res,
        row: Math.floor(i / 2),
        col: i % 2 === 0 ? 0 : 3,
      };
    });

    this.currentGraphs.next(updatedValue);
  }

  deleteGraph(index: number) {
    const currentGraphs = this.currentGraphs.value as any[];
    let newValue = currentGraphs.filter((res, i) => i != index);

    newValue = newValue.map((res, i) => {
      return {
        ...res,
        row: Math.floor(i / 2),
        col: i % 2 === 0 ? 0 : 3,
      };
    });

    this.currentGraphs.next(newValue);
  }

  get getCurrentGraph() {
    return this.currentGraphs.asObservable();
  }
}
