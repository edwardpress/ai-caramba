import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { FabComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent {
  @ViewChild('ai_chat_input')
  public aiChatInput!: TextBoxComponent;

  @ViewChild('ai_chat_button')
  public aiChatButton!: FabComponent;

  constructor(){}
}