import { NgModule } from '@angular/core';

import { ShareModule } from '@apply-chance/share';
import { PanelLayoutRoutingModule } from './panel-layout-routing.module';
import { PanelLayoutComponent } from './panel-layout.component';

@NgModule({
  imports: [
    PanelLayoutRoutingModule,
    ShareModule
  ],
  declarations: [PanelLayoutComponent]
})
export class PanelLayoutModule { }
