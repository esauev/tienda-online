import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: String = 'http://localhost:8080/ps/category';

  constructor(private http: HttpClient) { }

  getCategorys() : Observable<Category[]>{
    return this.http.get<Category[]>(this.url + '/list');
  };
}
