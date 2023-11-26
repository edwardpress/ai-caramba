import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenAiService } from './service/open-ai.service';
import { DashboardDataService } from './service/dashboard-data.service';
import { sampleData } from './dummyData';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private chatGPT: OpenAiService,
    private dashboardData: DashboardDataService
  ) {
    const userBalance = sampleData[0];
    // this.dashboardData.updateGraph(userBalance);
  }

  @ViewChild('ejDialog') ejDialog: DialogComponent | any;
  // The Dialog shows within the target element.
  @ViewChild('container', { read: ElementRef, static: true }) container:
    | ElementRef
    | any;
  // The Dialog shows within the target element.
  public targetElement?: HTMLElement;
  showDialog = false;
  position = { X: 'right', Y: 'bottom' };

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };
  // Sample level code to handle the button click action
  public onOpenDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };
  // Sample level code to hide the Dialog when click the Dialog overlay
  public onOverlayClick: EmitType<object> = () => {
    this.showDialog = false;
  };

  showChat() {
    this.showDialog = true;
  }
}
