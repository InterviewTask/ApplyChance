import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';

@NgModule({
  imports: [
    MyActivityRoutingModule
  ],
  declarations: [MyActivityComponent]
})
export class MyActivityModule { }
