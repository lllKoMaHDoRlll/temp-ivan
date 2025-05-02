import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product';
import { ProductingService } from '../producting.service';

@Component({
  selector: 'app-featured-items-list',
  standalone: true,
  imports: [
    MatDividerModule,
    ProductCardComponent,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './featured-items-list.component.html',
  styleUrl: './featured-items-list.component.css'
})
export class FeaturedItemsListComponent {
  productsList: Product[] = [];
  productingService: ProductingService = inject(ProductingService);

  constructor() {
    this.productsList = this.productingService.getFeaturedItems();
  }
}
