import { Routes } from '@angular/router';
import { AddGradientComponent } from "app/stock/add-task/add-gradient/add-gradient.component";
import { AddKordonComponent } from "app/stock/add-task/add-kordon/add-kordon.component";
import { AddOksComponent } from "app/stock/add-task/add-oks/add-oks.component";
import { AddOks2Component } from "app/stock/add-task/add-oks2/add-oks2.component";
import { AddRoziskUkvComponent } from "app/stock/add-task/add-roziskUkv/add-roziskUkv.component";
import { AddTerminalComponent } from "app/stock/add-task/add-terminal/add-terminal.component";


export const AddTaskRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'add-gradient',
      component: AddGradientComponent
    }, {
      path: 'add-kordon',
      component: AddKordonComponent
    }, {
      path: 'add-oks',
      component: AddOksComponent
    }, {
      path: 'add-oks2',
      component: AddOks2Component
    }, {
      path: 'add-roziskUkv',
      component: AddRoziskUkvComponent
    }, {
      path: 'add-terminal',
      component: AddTerminalComponent
    }]
  }
];
