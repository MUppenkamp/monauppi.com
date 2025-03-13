import { Component } from '@angular/core';
import { SpeakerComponent } from "./speaker/speaker.component";

@Component({
  imports: [SpeakerComponent],
  selector: 'nintendo-top',
  templateUrl: 'nintendo-top.component.html',
})
export class NintendoTopComponent {
  messageHeader: string = 'Mona';
  messageBody: string =
    "I'm happy you are here! Down below you can find all platforms that are important to me!";
}
