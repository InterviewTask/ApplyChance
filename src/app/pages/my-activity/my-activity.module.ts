import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';
import { ShareModule } from '@apply-chance/share';
import { AppliedPossionsComponent, AppliedUnivercityDialogComponent, AppliedUniversitiesComponent, MyMentoringComponent, MySessionsComponent, MyWishListComponent, ScoreWeightsComponent } from './components';
import { AppliedUnivercityService, TabHandlerService } from './services';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    MyActivityComponent,
    AppliedPossionsComponent,
    AppliedUniversitiesComponent,
    MyMentoringComponent,
    MySessionsComponent,
    MyWishListComponent,
    ScoreWeightsComponent,
    AppliedUnivercityDialogComponent
  ],
  imports: [
    CommonModule,
    MyActivityRoutingModule,
    ShareModule

  ],
  providers:[TabHandlerService,AppliedUnivercityService,MatDatepickerModule]
})
export class MyActivityModule { }
