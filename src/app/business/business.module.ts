import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ProductList } from '../business/product-list/product-list.component';
import { ProductDetail } from '../business/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ProductList,
    ProductDetail,
  ]
})
export class BusinessModule { }
