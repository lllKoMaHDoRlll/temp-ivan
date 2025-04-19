import { Component } from '@angular/core';
import { CartProductsListComponent } from '../cart-products-list/cart-products-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartProductsListComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
