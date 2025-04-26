import { Component, inject, Input } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ProductingService } from '../producting.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.css'
})
export class ProductThumbnailComponent {
  productingService: ProductingService = inject(ProductingService);
  @Input() product!: Product | undefined;
  sizes = [...Array(10).keys()].map(i => i + 36);
  selectedSize = -1;

  constructor(private router: Router) { }

  addToCart() {
    if (this.selectedSize === -1) {
      alert("Выберите размер");
      return;
    }
    this.productingService.addProductToCart(this.product!, this.selectedSize);
    this.router.navigateByUrl("cart");
  }
}
