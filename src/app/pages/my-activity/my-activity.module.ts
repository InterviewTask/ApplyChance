import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';
import { ShareModule } from '@apply-chance/share';
import { AppliedPossionsComponent, AppliedUniversitiesComponent, MyMentoringComponent, MySessionsComponent, MyWishListComponent, ScoreWeightsComponent } from './components';
import { AppliedUnivercityService, TabHandlerService } from './services';

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
    CommonModule,
    MyActivityRoutingModule,
    ShareModule
  ],
  providers:[TabHandlerService,AppliedUnivercityService]
})
export class MyActivityModule { }
