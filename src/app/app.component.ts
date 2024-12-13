import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NintendoTopComponent } from './nintendo-top/nintendo-top.component';
import { NintendoMidComponent } from './nintendo-mid/nintendo-mid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NintendoTopComponent, NintendoMidComponent],
})
export class AppComponent {
  messageHeader: string = 'Mona';
  messageBody: string =
    "I'm happy you are here! Down below you can find all platforms that are important to me!";
}
