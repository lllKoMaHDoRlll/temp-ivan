import { Component, Input } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.css'
})
export class ProductThumbnailComponent {
  @Input() product!: Product | undefined;
}
