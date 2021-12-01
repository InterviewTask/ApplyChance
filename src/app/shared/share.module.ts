import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ShareModule { }
