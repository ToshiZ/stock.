import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { AddTaskRoutes } from "app/stock/add-task/add-task.routing";

import {
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdSlideToggleModule,
    MdSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddTerminalComponent } from "app/stock/add-task/add-terminal/add-terminal.component";
import { AddRoziskUkvComponent } from "app/stock/add-task/add-roziskUkv/add-roziskUkv.component";
import { AddOks2Component } from "app/stock/add-task/add-oks2/add-oks2.component";
import { AddOksComponent } from "app/stock/add-task/add-oks/add-oks.component";
import { AddKordonComponent } from "app/stock/add-task/add-kordon/add-kordon.component";
import { AddGradientComponent } from "app/stock/add-task/add-gradient/add-gradient.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AddTaskRoutes),
        MdIconModule,
        MdCardModule,
        MdInputModule,
        MdButtonModule,
        MdToolbarModule,
        MdTabsModule,
        MdListModule,
        MdSlideToggleModule,
        MdSelectModule,
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [
        AddTerminalComponent,
        AddRoziskUkvComponent,
        AddOks2Component,
        AddOksComponent,
        AddKordonComponent,
        AddGradientComponent
    ],
})

export class AddTaskModule { }
