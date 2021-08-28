import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingRoutingModule } from './reading-routing.module';
import { ReadingComponent } from './reading.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';

@NgModule({
  declarations: [ReadingComponent],
  imports: [CommonModule, ReadingRoutingModule, MaterialUiModule],
})
export class ReadingModule {}
