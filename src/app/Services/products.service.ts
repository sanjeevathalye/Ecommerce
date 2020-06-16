import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private afs: AngularFirestore, private storage: AngularFireStorage) { }

  getAllProducts() {
    return this.afs.collection('Products').valueChanges();
  }

  addProduct(name: string, description: string,  price: number, image: File) {
    let reference = this.storage.ref('ProductImages/' + image.name);
    reference.put(image)
    .then( () => {
        reference.getDownloadURL().subscribe(imagePath => {
          this.afs.collection('Products').add( {name, description, price, imagePath} );
        })
    });
  }

  getAllProductsWithId() {
    return this.afs.collection('Products').snapshotChanges();
  }
}
