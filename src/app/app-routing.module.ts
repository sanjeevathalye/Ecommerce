import { GuardService } from './Services/guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'admin',  component: AdminComponent, canActivate: [GuardService] },
  { path: 'cart',     component: CartComponent, canActivate:[GuardService] },
  { path: 'login',    component: LoginComponent },
  { path: 'logout',   component: LogoutComponent },
  { path: 'navbar',   component: NavbarComponent },
  { path: 'orders',   component: OrdersComponent },
  { path: 'products', component: ProductsComponent, canActivate: [GuardService] },
  { path: 'signup',   component: SignUpComponent },
  { path: '**',       component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
