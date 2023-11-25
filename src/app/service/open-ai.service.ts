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

    var first = "### Given the JSON schema of the data\n\n"
    
    var a = {
      "type": "object",
      "properties": {
        "Date": {
          "type": "string"
        },
        "Company Name": {
          "type": "string"
        },
        "Expense": {
          "type": "number"
        },
        "Income": {
          "type": "integer"
        },
        "Month Name": {
          "type": "string"
        },
        "Month Number": {
          "type": "integer"
        },
        "Vendor Type ID": {
          "type": "integer"
        },
        "Account Number": {
          "type": "string"
        },
        "Transaction ID": {
          "type": "integer"
        },
        "Transaction Zipcode": {
          "type": "string"
        },
        "Country": {
          "type": "string"
        },
        "Time": {
          "type": "string"
        },
        "Bank Name": {
          "type": "string"
        }
      }
    }
    var stringA = JSON.stringify(a);

    var mid = "\n\n# Give me a visualisation of ";

    // message
 
    var mid2 = " in the JSON schema below\n\n";

    var b = {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": ["Bar", "Line", "Pie"]
        },
        "chartSetting": {
          "type": "object",
          "properties": {
            "xName": {
              "type": "string"
            },
            "yName": {
              "type": "string"
            },
            "xAxis": {
              "type": "object",
              "properties": {
                "valueType": {
                  "type": "string",
                  "enum": ["Category", "Numeric", "DateTime"]
                }
              },
              "required": [
                "valueType"
              ]
            }
          },
          "required": [
            "xName",
            "yName",
            "xAxis"
          ]
        },
        "description": {
          "type": "string"
        },
        "row": {
          "type": "integer"
        },
        "col": {
          "type": "integer"
        }
      },
      "required": [
        "title",
        "type",
        "chartSetting",
        "description",
        "row",
        "col"
      ]
    }
    var stringB = JSON.stringify(b);
    var asJ = "\n\nOutput only JSON";

    var decoratedMessage = first + stringA + mid +message + mid2 + stringB + asJ;

    console.log("decorated message:" + decoratedMessage);
    const params = {
      model: 'gpt-3.5-turbo-1106',
      messages: [{ role: 'user', content: decoratedMessage }],
      temperature: 1,
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
