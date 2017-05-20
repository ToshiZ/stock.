import { Component } from '@angular/core';

@Component({
  selector: 'add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.scss']
})
export class AddTerminalComponent {

  systems: Object[] = [{
    name: 'Lights',
    on: false,
  }, {
    name: 'Surround Sound',
    on: true,
  }, {
    name: 'T.V.',
    on: true,
  }, {
    name: 'Entertainment System',
    on: true,
  }];

  constructor() { }
}
