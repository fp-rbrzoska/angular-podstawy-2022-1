import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {

  private _products: Product[] = [
    { id: '1', name: 'Prod1', description: 'Prod1 descr', price: 0.5 },
    { id: '2', name: 'Super Prod2', description: 'Prod2 descr', price: 2 },
    { id: '3', name: 'Exrtra Prod3', price: 10 },
  ]

  get products(): Product[] {
    return this._products;
  }
  constructor() { }
}
