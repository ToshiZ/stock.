import { Component } from '@angular/core';

@Component({
  selector: 'add-gradient',
  templateUrl: './add-gradient.component.html',
  styleUrls: ['./add-gradient.component.scss']
})
export class AddGradientComponent {

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
