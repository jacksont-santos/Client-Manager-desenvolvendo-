import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { BusinessComponent } from './business/business.component';
import { ProductDetail } from './business/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '',   redirectTo: 'signin', pathMatch: 'full' },
  { path: 'business', component: BusinessComponent },
  { path: 'product:id', component: ProductDetail },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
