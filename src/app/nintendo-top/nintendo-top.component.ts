import { Component, OnInit } from '@angular/core';
import { VentilationComponent } from "./ventilation/ventilation.component";

@Component({
  standalone: true,
  imports: [VentilationComponent],
  selector: 'nintendo-top',
  templateUrl: 'nintendo-top.component.html',
})
export class NintendoTopComponent {
  messageHeader: string = 'Mona';
  messageBody: string =
    "I'm happy you are here! Down below you can find all platforms that are important to me!";
}
