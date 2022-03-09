import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductsService } from '../products.service';

@Component({
  selector: 'fp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // showBox = true;

  // myNumbers = [1,2,3,4,5];
  // users: User[] = [
  //   { name: 'Alojzy', age: 65, isOnline: false },
  //   { name: 'Helga', age: 40, isOnline: true },
  //   { name: 'Johnny', age: 18, isOnline: true },
  //   { name: 'Jarek', age: 70, isOnline: false }
  // ];

  // myDate = new Date();

  products!: Product[];
  constructor(private _productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.products = this._productsService.products;
  }

  // toggleBox() {
  //   this.showBox = !this.showBox
  // }

  // makeUppercase(str: string) {
  //   console.log('uppercase!')
  //   return str.toUpperCase()
  // }

}
