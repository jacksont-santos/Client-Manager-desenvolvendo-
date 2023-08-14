import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { ComponentsModule } from "./components/components.module";
import { BusinessModule } from "./business/business.module";

@NgModule({
    declarations: [AppComponent, BusinessComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule,
        ComponentsModule,
        BusinessModule
    ]
})
export class AppModule { }
