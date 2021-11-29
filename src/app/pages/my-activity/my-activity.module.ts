import { NgModule } from '@angular/core';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';
import { ShareModule } from '@apply-chance/share';

@NgModule({
  imports: [
    MyActivityRoutingModule,
    ShareModule
  ],
  declarations: [MyActivityComponent]
})
export class MyActivityModule { }
