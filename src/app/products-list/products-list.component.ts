import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    MatDividerModule,
    ProductCardComponent,
    CommonModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  readonly imageBaseFilePath = "assets/images/products";
  readonly productsList: Product[] = [
    {
      id: 1,
      name: "Adidas Superstar",
      imageFilePath: `${this.imageBaseFilePath}/1.jpg`,
      price: 100
    },
    {
      id: 2,
      name: "Onitsuka Tiger",
      imageFilePath: `${this.imageBaseFilePath}/2.jpg`,
      price: 70
    },
    {
      id: 3,
      name: "Adidas Smith",
      imageFilePath: `${this.imageBaseFilePath}/3.jpg`,
      price: 120
    },
    {
      id: 4,
      name: "Converse Pro",
      imageFilePath: `${this.imageBaseFilePath}/4.jpg`,
      price: 200
    },
    {
      id: 5,
      name: "Vans SK8 Hi",
      imageFilePath: `${this.imageBaseFilePath}/5.jpg`,
      price: 175
    },
    {
      id: 6,
      name: "Nike Lava Dome",
      imageFilePath: `${this.imageBaseFilePath}/6.jpg`,
      price: 130
    },
    {
      id: 7,
      name: "Adidas Forum",
      imageFilePath: `${this.imageBaseFilePath}/7.jpg`,
      price: 220
    },
    {
      id: 8,
      name: "NB 1300",
      imageFilePath: `${this.imageBaseFilePath}/8.jpg`,
      price: 200
    },
    {
      id: 9,
      name: "Nike Air Jordan",
      imageFilePath: `${this.imageBaseFilePath}/9.jpg`,
      price: 300
    },
    {
      id: 10,
      name: "Adidas Campus",
      imageFilePath: `${this.imageBaseFilePath}/10.jpg`,
      price: 110
    },
    {
      id: 11,
      name: "Diadora Maverick",
      imageFilePath: `${this.imageBaseFilePath}/11.jpg`,
      price: 150
    },
    {
      id: 12,
      name: "Nike Air Max 1",
      imageFilePath: `${this.imageBaseFilePath}/12.jpg`,
      price: 140
    },
    {
      id: 13,
      name: "Nike Air Jordan IV",
      imageFilePath: `${this.imageBaseFilePath}/13.jpg`,
      price: 230
    },
    {
      id: 14,
      name: "Reebok The Pump",
      imageFilePath: `${this.imageBaseFilePath}/14.jpg`,
      price: 370
    },
    {
      id: 15,
      name: "Nike Air Jordan V",
      imageFilePath: `${this.imageBaseFilePath}/15.jpg`,
      price: 200
    }
  ];
}
