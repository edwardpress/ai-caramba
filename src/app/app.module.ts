import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule,DashboardLayoutModule, RouterModule, CommonModule],
  declarations: [ AppComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }