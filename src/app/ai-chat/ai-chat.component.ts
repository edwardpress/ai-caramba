import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { FabComponent } from '@syncfusion/ej2-angular-buttons';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { OpenAiService } from '../service/open-ai.service';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent {
  public latestMsgIndex: number = 4;
  public chatData: any = [
    {
      text: "AI Analyst",
      contact: "Hi",
      id: "1",
      chat: "sender"
    },
    { text: "You",
      contact: "Hello",
      id: "2",
      chat: "receiver" },
    {
      text: "AI Analyst",
      contact: "What kind of financial analysis are we interested in today?",
      id: "3",
      chat: "sender"
    },
  ];
  public fields: any = { text: "Name" };
  @ViewChild('list') public msgList!: ListViewComponent;
  @ViewChild('message_input') public msgInput!: any;
  public btnClick() {
    let value = this.msgInput.nativeElement.value;
    this.latestMsgIndex;
    this.msgInput.nativeElement.value = "";
    this.chatGPT.getQuery(value).subscribe((res)=>{
      console.log('GPT RESPONSE', res);

    })
    // this.msgList.addItem([{ text: "You", contact: value, id: this.latestMsgIndex, chat: "receiver" }]);
    
  };
  constructor(private chatGPT: OpenAiService) { 

  }
}