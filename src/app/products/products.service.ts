import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, retry } from 'rxjs';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {

  // private _products: Product[] = [
  //   { id: '1', name: 'Prod1', description: 'Prod1 descr', price: 0.5 },
  //   { id: '2', name: 'Super Prod2', description: 'Prod2 descr', price: 2 },
  //   { id: '3', name: 'Exrtra Prod3', price: 10 },
  // ]

 private _productsSubj = new BehaviorSubject<Product[]>([]);

 products$: Observable<Product[]> = this._productsSubj.asObservable();

  get products(): Product[] {
    return this._productsSubj.value;
  }
  constructor(private _httpClient: HttpClient) { }

  fetchProducts(): void {
    this._httpClient.get<Product[]>('http://localhost:3000/products').pipe(retry(3)).subscribe(p => this._productsSubj.next(p))
  }

  updateProducts(prod: Product){
    this._httpClient.post<Product[]>('http://localhost:3000/products', prod).subscribe(p => this.fetchProducts())
  }
}
