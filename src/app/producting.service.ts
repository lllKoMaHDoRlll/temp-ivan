import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductingService {
  readonly imageBaseFilePath = "assets/images/products";
  readonly productsList: Product[] = [
    {
      id: 1,
      name: "Adidas Superstar",
      imageFilePath: `${this.imageBaseFilePath}/1.jpg`,
      price: 10000,
      description: ""
    },
    {
      id: 2,
      name: "Onitsuka Tiger",
      imageFilePath: `${this.imageBaseFilePath}/2.jpg`,
      price: 7000,
      description: ""
    },
    {
      id: 3,
      name: "Adidas Smith",
      imageFilePath: `${this.imageBaseFilePath}/3.jpg`,
      price: 12000,
      description: ""
    },
    {
      id: 4,
      name: "Converse Pro",
      imageFilePath: `${this.imageBaseFilePath}/4.jpg`,
      price: 20000,
      description: ""
    },
    {
      id: 5,
      name: "Vans SK8 Hi",
      imageFilePath: `${this.imageBaseFilePath}/5.jpg`,
      price: 17500,
      description: ""
    },
    {
      id: 6,
      name: "Nike Lava Dome",
      imageFilePath: `${this.imageBaseFilePath}/6.jpg`,
      price: 13000,
      description: ""
    },
    {
      id: 7,
      name: "Adidas Forum",
      imageFilePath: `${this.imageBaseFilePath}/7.jpg`,
      price: 22000,
      description: ""
    },
    {
      id: 8,
      name: "NB 1300",
      imageFilePath: `${this.imageBaseFilePath}/8.jpg`,
      price: 20000,
      description: ""
    },
    {
      id: 9,
      name: "Nike Air Jordan",
      imageFilePath: `${this.imageBaseFilePath}/9.jpg`,
      price: 30000,
      description: ""
    },
    {
      id: 10,
      name: "Adidas Campus",
      imageFilePath: `${this.imageBaseFilePath}/10.jpg`,
      price: 11000,
      description: ""
    },
    {
      id: 11,
      name: "Diadora Maverick",
      imageFilePath: `${this.imageBaseFilePath}/11.jpg`,
      price: 15000,
      description: ""
    },
    {
      id: 12,
      name: "Nike Air Max 1",
      imageFilePath: `${this.imageBaseFilePath}/12.jpg`,
      price: 14000,
      description: ""
    },
    {
      id: 13,
      name: "Nike Air Jordan IV",
      imageFilePath: `${this.imageBaseFilePath}/13.jpg`,
      price: 23000,
      description: ""
    },
    {
      id: 14,
      name: "Reebok The Pump",
      imageFilePath: `${this.imageBaseFilePath}/14.jpg`,
      price: 37000,
      description: ""
    },
    {
      id: 15,
      name: "Nike Air Jordan V",
      imageFilePath: `${this.imageBaseFilePath}/15.jpg`,
      price: 20000,
      description: ""
    }
  ];

  cart: Product[] = [];
  cartValue = 0;

  constructor() { }

  getAllProductsList(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find(product => product.id === id);
  }

  addProductToCart(product: Product) {
    this.cart.push(product);
    this.cartValue += product.price;
  }

  getProductsFromCart() {
    return this.cart;
  }
}
