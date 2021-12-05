import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTERCEPTOR_CHAIN_PROVIDER } from './interseptors';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    INTERCEPTOR_CHAIN_PROVIDER
  ]
})
export class CoreModule { }
