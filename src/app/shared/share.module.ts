import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApplicationStatuePipe } from './utils/pipes';
import { FundStatusPipe } from './utils/pipes/fund-status.pipe';


const pips=[
  ApplicationStatuePipe,
  FundStatusPipe
]

const Mateial=[
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]



@NgModule({
  declarations: [
    NavbarComponent,
    ...pips,
  ],
  imports: [
    CommonModule,
    ...Mateial,
  ],
  exports: [
    NavbarComponent,
    ...Mateial,
    ...pips
  ]
})
export class ShareModule { }
