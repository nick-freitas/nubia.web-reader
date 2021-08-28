import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, HeaderLayoutComponent],
  imports: [CommonModule, RouterModule, MaterialUiModule],
  exports: [MaterialUiModule],
})
export class CoreModule {}
