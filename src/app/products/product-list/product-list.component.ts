import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  showBox = false;

  myNumbers = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  toggleBox() {
    this.showBox = !this.showBox
  }

}
