import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyActivityComponent } from './my-activity.component';
import { MyActivityRoutingModule } from './my-activity-routing.module';
import { ShareModule } from '@apply-chance/share';
import { AppliedPossionsComponent, AppliedUnivercityDialogComponent, AppliedUniversitiesComponent, AppliedUniversitiesItemComponent, MyMentoringComponent, MySessionsComponent, MyWishListComponent, ScoreWeightsComponent } from './components';
import { AppliedUnivercityService, TabHandlerService } from './services';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyActivityComponent,
    AppliedPossionsComponent,
    AppliedUniversitiesComponent,
    MyMentoringComponent,
    MySessionsComponent,
    MyWishListComponent,
    ScoreWeightsComponent,
    AppliedUnivercityDialogComponent,
    AppliedUniversitiesItemComponent
  ],
  imports: [
    CommonModule,
    MyActivityRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule

  ],
  providers:[TabHandlerService,AppliedUnivercityService,MatDatepickerModule]
})
export class MyActivityModule { }
