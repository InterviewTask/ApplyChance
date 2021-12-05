
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTERCEPTOR_CHAIN_PROVIDER } from './interseptors';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    INTERCEPTOR_CHAIN_PROVIDER
  ],
  exports: [
  ]
})
export class CoreModule { }
