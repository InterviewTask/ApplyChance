import { NgModule } from '@angular/core';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';
import { ShareModule } from '@apply-chance/share';
import { AppliedPossionsComponent, AppliedUniversitiesComponent, MyMentoringComponent, MySessionsComponent, MyWishListComponent, ScoreWeightsComponent } from './components';

@NgModule({
  declarations: [
    MyActivityComponent,
    AppliedPossionsComponent,
    AppliedUniversitiesComponent,
    MyMentoringComponent,
    MySessionsComponent,
    MyWishListComponent,
    ScoreWeightsComponent
  ],
  imports: [
    MyActivityRoutingModule,
    ShareModule
  ],
})
export class MyActivityModule { }
