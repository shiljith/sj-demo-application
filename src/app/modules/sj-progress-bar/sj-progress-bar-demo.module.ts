import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SjProgressBarDemoRoutingModule } from './sj-progress-bar-demo-routing.module';
import { SjProgressBarDemoComponent } from './sj-progress-bar-demo.component';
import { SJProgressBarModule } from 'sj-progress-bar';


@NgModule({
  declarations: [
    SjProgressBarDemoComponent
  ],
  imports: [
    CommonModule,
    SJProgressBarModule,
    SjProgressBarDemoRoutingModule
  ]
})
export class SjProgressBarDemoModule { }
