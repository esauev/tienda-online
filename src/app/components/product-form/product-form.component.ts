import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = new Product();
  categorys: Category[] = [];

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategorys()
      .subscribe(response => this.categorys = response);

    this.activatedRoute.params
      .subscribe(
        params => {
          let id: number = params['id'];
          if(id){
            this.productService.getProduct(id)
              .subscribe(response => this.product = response);
          }
        }
      )
  }

  addProduct(){
    this.productService.addProduct(this.product)
      .subscribe(response => this.router.navigate(['/productos']))
  }

  updateProduct(){
    this.productService.updateProdcuto(this.product)
      .subscribe(response => this.router.navigate(['/productos']))
  }

  compareCategory(cat1: Category, cat2 : Category): boolean{
    if(cat1 === undefined && cat2 === undefined) return true;
    return cat1 === null || cat2 === null || cat1 === undefined || cat2 === null ? false : cat1.categoryId == cat2.categoryId;
  }

}
