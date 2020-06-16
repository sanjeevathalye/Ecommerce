import { ProductsService } from './../../Services/products.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productsArray: Array<any> ;

  @ViewChild('image') image: ElementRef

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getAllProductsWithId().subscribe( cs =>
      {
        this.productsArray = cs.map(p => {
          return {
            id: p.payload.doc.id,
            ...p.payload.doc.data() as {}
          }
        }) 
        console.log(this.productsArray);
      })
  }

  addNewProduct(form: NgForm) {
    let name = form.value.name,
        desc = form.value.description,
        price = form.value.price,
        picture = (this.image.nativeElement as HTMLInputElement).files[0];
    this.ps.addProduct(name, desc, price, picture);
  }

}
