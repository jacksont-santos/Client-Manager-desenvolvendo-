import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [SigninComponent]
})
export class AuthModule { }
