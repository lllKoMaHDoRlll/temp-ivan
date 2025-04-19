import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductingService } from '../producting.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-products-list',
  standalone: true,
  imports: [
    MatDividerModule,
    ProductCardComponent,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './cart-products-list.component.html',
  styleUrl: './cart-products-list.component.css'
})
export class CartProductsListComponent {
  productsList: Product[] = [];
  productingService: ProductingService = inject(ProductingService);

  constructor() {
    this.productsList = this.productingService.getProductsFromCart();
  }
}
