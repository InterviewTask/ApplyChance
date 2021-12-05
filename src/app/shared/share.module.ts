import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent, NavbarComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApplicationStatuePipe } from './utils/pipes';
import { FundStatusPipe } from './utils/pipes/fund-status.pipe';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


const pips = [
  ApplicationStatuePipe,
  FundStatusPipe
]

const Mateial = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule
]

const components = [
  NavbarComponent,
  DeleteDialogComponent,
]

@NgModule({
  declarations: [
    ...components,
    ...pips,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ...Mateial,
  ],
  exports: [
    ...components,
    ...Mateial,
    ...pips
  ]
})
export class ShareModule { }
