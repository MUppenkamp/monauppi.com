import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NintendoTopComponent } from './nintendo-top/nintendo-top.component';
import { NintendoMidComponent } from './nintendo-mid/nintendo-mid.component';
import { NintendoBotComponent } from "./nintendo-bot/nintendo-bot.component";
import { HelloKittyComponent } from "./hello-kitty/hello-kitty.componen";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NintendoTopComponent, NintendoMidComponent, NintendoBotComponent, HelloKittyComponent],
})
export class AppComponent {
  messageHeader: string = 'Mona';
  messageBody: string =
    "I'm happy you are here! Down below you can find all platforms that are important to me!";
}
