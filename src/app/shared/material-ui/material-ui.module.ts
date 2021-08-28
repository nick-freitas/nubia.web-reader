import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class MaterialUiModule {}
