import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './panel-layout.component';

const routes: Routes = [
  {
    path: '',
    component:PanelLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('../my-activity/my-activity.module').then(m=>m.MyActivityModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelLayoutRoutingModule { }
