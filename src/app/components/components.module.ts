import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { CustomInput } from './custom-input/custom-input.component';
import { CustomButton } from './custom-button/custom-button.component';
import { Login } from './login/login.component';
import { Navbar } from './navbar/navbar.component';
import { Sidebar } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    CustomInput,
    CustomButton,
    Login,
    Navbar,
    Sidebar,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    CustomInput,
    CustomButton,
    Login,
    Navbar,
    Sidebar,
  ],
})
export class ComponentsModule { }
