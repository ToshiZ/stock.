import { Component } from '@angular/core';

@Component({
  selector: 'add-oks2',
  templateUrl: './add-oks2.component.html',
  styleUrls: ['./add-oks2.component.scss']
})
export class AddOks2Component {

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
