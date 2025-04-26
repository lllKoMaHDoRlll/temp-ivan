import { Component, inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductingService } from '../producting.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-products-list',
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
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productsList: Product[] = [];
  filteredProductsList: Product[] = [];
  productingService: ProductingService = inject(ProductingService);
  brands: string[] = [];

  constructor() {
    this.productsList = this.productingService.getAllProductsList();
    this.filteredProductsList = [...this.productsList];
    this.brands = this.productingService.getBrands();
  }

  public onFilterChanged(value: string) {
    if (value === 'all') {
      this.filteredProductsList = this.productsList;
      return;
    }
    this.filteredProductsList = this.productsList.filter((product) => product.brand == value);
  }
}
