import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, PageHeaderModule, FormsModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
