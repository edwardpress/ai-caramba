import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { FabComponent } from '@syncfusion/ej2-angular-buttons';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { OpenAiService } from '../service/open-ai.service';
import { DashboardDataService } from '../service/dashboard-data.service';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss',
})
export class AiChatComponent {
  public latestMsgIndex: number = 0;
  public chatData: any = [
    {
      text: 'AI Analyst',
      contact: 'What kind of financial analysis are we interested in today?',
      id: 1,
      chat: 'sender',
    },
  ];

  public addAIMessage(msg: string) {
    this.msgList.addItem([
      {
        text: 'AI Analyst',
        contact: msg,
        id: this.latestMsgIndex,
        chat: 'sender',
      },
    ]);
  }
  public addUserMessage(msg: string) {
    this.msgList.addItem([
      { text: 'You', contact: msg, id: this.latestMsgIndex, chat: 'receiver' },
    ]);
  }

  public fields: any = { text: 'Name' };
  @ViewChild('list') public msgList!: ListViewComponent;
  @ViewChild('message_input') public msgInput!: any;
  public btnClick() {
    let value = this.msgInput.nativeElement.value;
    this.latestMsgIndex++;
    this.msgInput.nativeElement.value = ''; // clear input message
    this.addUserMessage(value);

    this.chatGPT.getFakeGPTQuery(value).subscribe((res) => {
      if (res.includes('{') && res.includes('}')) {
        const firstIndex = res.indexOf('{');
        const lastIndex = res.lastIndexOf('}');
        const json = res.substring(firstIndex, lastIndex + 1);
        const newGraph = JSON.parse(json);

        this.dashboard.updateGraph(newGraph);

        res =
          res.substring(0, firstIndex) +
          res.substring(lastIndex + 1, res.length);
      }

      this.addAIMessage(res);
    });
  }
  constructor(
    private chatGPT: OpenAiService,
    private dashboard: DashboardDataService
  ) {}
}
