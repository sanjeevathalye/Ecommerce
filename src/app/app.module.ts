
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Firebase Module
import { AngularFireModule } from '@angular/fire' ;
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    CartComponent,
    AccountComponent,
    ProductsComponent,
    OrdersComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAUW6EMXtlW-eS8oz7J8wTZ8injl7HtmvA",
      authDomain: "ecommerce-8c326.firebaseapp.com",
      databaseURL: "https://ecommerce-8c326.firebaseio.com",
      projectId: "ecommerce-8c326",
      storageBucket: "ecommerce-8c326.appspot.com",
      messagingSenderId: "206069195893",
      appId: "1:206069195893:web:dfed610dbc6692301c443c",
      measurementId: "G-1WDEGFYZ0V"
    })
  ],
  
  providers: [ AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
