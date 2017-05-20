import { Component } from '@angular/core';

@Component({
  selector: 'add-kordon',
  templateUrl: './add-kordon.component.html',
  styleUrls: ['./add-kordon.component.scss']
})
export class AddKordonComponent {

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
