import { Component, inject, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartProduct } from '../cart-product';
import { ProductingService } from '../producting.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cart-product-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './cart-product-item.component.html',
  styleUrl: './cart-product-item.component.css'
})
export class CartProductItemComponent {
  @Input() item!: CartProduct;
  private productingService = inject(ProductingService);

  public removeItemFromCart() {
    this.productingService.removeProductFromCart(this.item);
  }
}
