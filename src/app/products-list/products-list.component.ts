import { Component, inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductingService } from '../producting.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    MatDividerModule,
    ProductCardComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productsList: Product[] = [];
  productingService: ProductingService = inject(ProductingService);

  constructor() {
    this.productsList = this.productingService.getAllProductsList();
  }
}
