import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = [
    { name: 'Banana', price: 1.99, description: 'Fruit', imagePath: 'assets/images/banana.jpg'},
    { name: 'Orange', price: 2.99, description: 'Fruit', imagePath: 'assets/images/orange.jpeg'},
    { name: 'Kiwi', price: 3.69, description: 'Fruit', imagePath: 'assets/images/kiwi.jpg'},
    { name: 'Strawberry', price: 3.99, description: 'Fruit', imagePath: 'assets/images/strawberry.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index: number) {
    console.log('Added' , this.products[index], 'to the cart');
  }

}
