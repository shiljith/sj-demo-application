import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sj-progress-bar',
    loadChildren: () => 
      import('./modules/sj-progress-bar/sj-progress-bar-demo.module')
      .then(m => m.SjProgressBarDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
