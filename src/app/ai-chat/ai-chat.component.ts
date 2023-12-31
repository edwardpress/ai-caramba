import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { FabComponent } from '@syncfusion/ej2-angular-buttons';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { OpenAiService } from '../service/open-ai.service';
import { DashboardDataService } from '../service/dashboard-data.service';
import { finalData } from '../dummyData';

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

    if (value.length > 0) {
      this.latestMsgIndex++;
      this.msgInput.nativeElement.value = ''; // clear input message
      this.addUserMessage(value);

      this.chatGPT.getQuery(value).subscribe((res) => {
        console.log('RAW CHAT GPT res:\n\n', res);
        if (res.includes('{') && res.includes('}')) {
          const firstIndex = res.indexOf('{');
          const lastIndex = res.lastIndexOf('}');
          const json = res.substring(firstIndex, lastIndex + 1);
          try {
            const newGraph = JSON.parse(json);
            const sortedFinalData = finalData.sort(function(a,b){ 
              if (a.Date < b.Date)
                return 1;
              else
                return -1;
            });
            if (value.match(/date/i) || value.match(/time/i) ) {
              newGraph.chartSetting.valueType = "DateTime"
            };
            newGraph.chartSetting["dataSource"] = sortedFinalData;
            this.dashboard.updateGraph(newGraph);
            res = "Here is an analytics dashboard of " + newGraph.description;
            // res =
            //   res.substring(0, firstIndex) +
            //   res.substring(lastIndex + 1, res.length);
          } catch (SyntaxError) {
            res = "Sorry, I didn't understand";
          }

        }

        this.addAIMessage(res);
      });
    }
  }
  constructor(
    private chatGPT: OpenAiService,
    private dashboard: DashboardDataService
  ) {}
}
