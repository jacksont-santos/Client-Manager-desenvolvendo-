import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductList implements OnInit {

  productList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe({
      next: (response) => this.productList = response,
      error: (err) => console.log()
    });
  }

}
