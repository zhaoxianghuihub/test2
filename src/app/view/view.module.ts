import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view.component';
import {ViewRoutes} from "./view.routing";
@NgModule({
    imports: [
        RouterModule.forChild(ViewRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [ViewComponent]
})

export class ViewModule {}
