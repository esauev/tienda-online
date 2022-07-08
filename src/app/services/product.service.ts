import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: String = 'http://localhost:8080/ps/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + '/list');
  }

  addProduct(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.url + '/add', product);
  }

  getProduct(id: number) : Observable<Product>{
    return this.http.get<Product>(this.url + '/' + id);
  }

  updateProdcuto(product: Product) : Observable<Product>{
    return this.http.put<Product>(this.url + '/update/' + product.productId, product);
  }

  deleteProduct(id: number) : Observable<any>{
    return this.http.delete<any>(this.url + '/delete/' + id);
  }
}
