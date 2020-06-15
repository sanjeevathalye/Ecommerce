import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Array<any> = [] ;  

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getFromCart().subscribe( c =>
      {
        this.shoppingCart = c.map ( x => {
          return {
            id: x.payload.doc.id,
            ...x.payload.doc.data() as {}
          }
        });
        console.log(this.shoppingCart);
      })
  }

  removeFromCart(index: number) {
    this.cart.removeFromCart(this.shoppingCart[index].id);
  }

  updateCart(index: number) {
    this.cart.updateItemFromCart(this.shoppingCart[index].id, this.shoppingCart[index].quantity);
  }
}
