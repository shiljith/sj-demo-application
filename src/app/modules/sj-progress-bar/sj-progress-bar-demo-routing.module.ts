import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SjProgressBarDemoComponent } from './sj-progress-bar-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SjProgressBarDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SjProgressBarDemoRoutingModule { }
