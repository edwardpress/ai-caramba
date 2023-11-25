import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { filter, from, map, of } from 'rxjs';
import { somedummy } from '../dummyData';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  openai: any = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true,
  });

  constructor() {}

  getQuery(message: string) {
    const params = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0,
    };

    return from(this.openai.chat.completions.create(params)).pipe(
      filter(
        (data: any) =>
          data.choices && data.choices.length > 0 && data.choices[0].message
      ),
      map((data) => data.choices[0].message.content)
    );
  }

  getFakeGPTQuery(msg: string) {
    return of(
      'BRO THIS IS FROM CHATGPT SCHEMA MAN ' +
        JSON.stringify(somedummy) +
        'YOOO'
    );
  }
}
