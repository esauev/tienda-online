import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(response => this.products = response);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(response => {
          this.products = this.products.filter(product => product.productId != id)
        }
      )
  }

}
