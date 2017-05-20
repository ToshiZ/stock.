import { Component } from '@angular/core';

@Component({
  selector: 'add-roziskUkv',
  templateUrl: './add-roziskUkv.component.html',
  styleUrls: ['./add-roziskUkv.component.scss']
})
export class AddRoziskUkvComponent {

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
