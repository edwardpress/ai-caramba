import { Injectable } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Injectable({ providedIn: 'root' })
export class IntroJSService {


    introJS = null;

    featureOne() {
        this.introJS = introJs();
        this.introJS.start();

        this.introJS.setOptions({
                steps: [
                    {
                        element: document.querySelector('.introPiece'),
                        intro:
                            'Start Chatting with our chat bot to customize your dashboard',
                    },
                    {
                        element: document.querySelector('.emptyDash'),
                        intro:
                            'All of the analytics will be saved here',
                    },
                ]
            })
            .start();
    }
 
}
