import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductingService } from '../producting.service';
import { MatButtonModule } from '@angular/material/button';
import { CartProduct } from '../cart-product';
import { CartProductItemComponent } from '../cart-product-item/cart-product-item.component';

@Component({
  selector: 'app-cart-products-list',
  standalone: true,
  imports: [
    MatDividerModule,
    CartProductItemComponent,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './cart-products-list.component.html',
  styleUrl: './cart-products-list.component.css'
})
export class CartProductsListComponent {
  productsList: CartProduct[] = [];
  productingService: ProductingService = inject(ProductingService);

  constructor() {
    this.productsList = this.productingService.getProductsFromCart();
  }
}
