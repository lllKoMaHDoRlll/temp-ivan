import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { FormComponent } from '../form/form.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';
import { ProductingService } from '../producting.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent,
    ProductsListComponent,
    ProductThumbnailComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute | undefined;
  productingService: ProductingService = inject(ProductingService);
  productId: number = -1;
  product: Product | undefined;
  constructor () {
    console.log("hello world");
    this.route = inject(ActivatedRoute);
    this.productId = Number(this.route.snapshot.params['id']);
    this.product = this.productingService.getProductById(this.productId);
  }
}
