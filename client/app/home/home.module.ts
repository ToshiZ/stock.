import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [

        CommonModule,
        RouterModule.forChild(HomeRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }