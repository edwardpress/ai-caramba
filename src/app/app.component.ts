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
        'Can you say "hello world"?'
      )
      .subscribe((res) => {
        console.log('GPT RESPONSE', res);

        // JSON schema, the type of graph to use
        // put into graph
        // switch (graph type) get appropirate dummyData 

      });
  }
}
