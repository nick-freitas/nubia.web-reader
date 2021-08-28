import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],

  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialUiModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
