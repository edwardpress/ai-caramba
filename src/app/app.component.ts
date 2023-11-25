import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenAiService } from './service/open-ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private chatGPT: OpenAiService) {}

  title = 'ai-caramba-dashboard';

  ngOnInit() {
    this.chatGPT
      .getQuery(
        'CAN YOU TELL ME HOW MUCH ANAS SHOULD PAY ME. RANDOM NUMBER WILL DO'
      )
      .subscribe((res) => {
        console.log('GPT RESPONSE', res);
      });
  }
}
