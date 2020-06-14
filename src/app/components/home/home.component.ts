import { CartService } from './../../Services/cart.service';
import { ProductsService } from '../../Services/products.service';
import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/Interface/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* This was old implementation to retrieve the data from memory. Now it is replaced by service 
     to retrieve it from the database.
  products: Array<Product> = [
    { name: 'Banana', price: 1.99, description: 'Fruit', imagePath: 'assets/images/banana.jpg'},
    { name: 'Orange', price: 2.99, description: 'Fruit', imagePath: 'assets/images/orange.jpeg'},
    { name: 'Kiwi', price: 3.69, description: 'Fruit', imagePath: 'assets/images/kiwi.jpg'},
    { name: 'Strawberry', price: 3.99, description: 'Fruit', imagePath: 'assets/images/strawberry.jpg'}
  ]
*/
  products: Array<any> = [] ;
  productIndex: number = -1;  // index of product added to the cart

  constructor( private ps: ProductsService, private cart: CartService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(data=> this.products = data);
  }

  addToCart(index: number) {
    this.productIndex = index;
  }

  buy(qty: number) {
    let selectedProduct = this.products[this.productIndex];
    let data = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: qty
    }
    this.cart.addToCart(data)
    .then(() => this.productIndex = -1)
    .catch(err => console.log(err));
  }

}
