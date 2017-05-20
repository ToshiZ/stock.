import { Component } from '@angular/core';

@Component({
  selector: 'add-oks',
  templateUrl: './add-oks.component.html',
  styleUrls: ['./add-oks.component.scss']
})
export class AddOksComponent {

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
