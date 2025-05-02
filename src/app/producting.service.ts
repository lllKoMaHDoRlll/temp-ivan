import { Injectable } from '@angular/core';
import { Product } from './product';
import { CartProduct } from './cart-product';

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
      price: 9900,
      brand: "adidas",
      description: "Легендарные кроссовки с резиновым “ракушечным” носом. Выпущены в 1969 году как баскетбольная обувь, позже стали иконой уличной моды и хип-хоп культуры."
    },
    {
      id: 2,
      name: "Onitsuka Tiger",
      imageFilePath: `${this.imageBaseFilePath}/2.jpg`,
      price: 6900,
      brand: "onitsuka",
      description: "Японский бренд, популярный своими ретро-силуэтами. Самые известные модели — Mexico 66 и Corsair. Легкие, стильные, с винтажным вайбом."
    },
    {
      id: 3,
      name: "Adidas Smith",
      imageFilePath: `${this.imageBaseFilePath}/3.jpg`,
      price: 11900,
      brand: "adidas",
      description: "Минималистичные кеды с кожаным верхом и перфорированными полосками. Названы в честь теннисиста Стэна Смита. Икона повседневного стиля."
    },
    {
      id: 4,
      name: "Converse Pro",
      imageFilePath: `${this.imageBaseFilePath}/4.jpg`,
      price: 19900,
      brand: "converse",
      description: "Баскетбольные кеды 70-х, в которых играл доктор Джей (Julius Erving). Классический силуэт Converse, но с кожаным верхом и улучшенной амортизацией."
    },
    {
      id: 5,
      name: "Vans SK8 Hi",
      imageFilePath: `${this.imageBaseFilePath}/5.jpg`,
      price: 16600,
      brand: "vans",
      description: "Высокие скейтерские кеды с культовой волной сбоку. Отличаются прочностью, мягким кантом и узнаваемым калифорнийским стилем."
    },
    {
      id: 6,
      name: "Nike Lava Dome",
      imageFilePath: `${this.imageBaseFilePath}/6.jpg`,
      price: 12900,
      brand: "nike",
      description: "Одна из первых трекинговых моделей от Nike (1981). Заниженный силуэт с прочной подошвой — в духе ретро-туризма и outdoor esthetics."
    },
    {
      id: 7,
      name: "Adidas Forum",
      imageFilePath: `${this.imageBaseFilePath}/7.jpg`,
      price: 21900,
      brand: "adidas",
      description: "Выпущенные в 1984 году баскетбольные кроссовки с ремешком на щиколотке. Сегодня популярны как ретро-обувь в стиле 80-х."
    },
    {
      id: 8,
      name: "NB 1300",
      imageFilePath: `${this.imageBaseFilePath}/8.jpg`,
      price: 19900,
      brand: "new balance",
      description: "Премиальные кроссовки из замши и сетки, представленные в 1985 году. Известны отличной амортизацией ENCAP и утонченным дизайном."
    },
    {
      id: 9,
      name: "Nike Air Jordan",
      imageFilePath: `${this.imageBaseFilePath}/9.jpg`,
      price: 23200,
      brand: "nike",
      description: "Первая модель Air Jordan (1985). Культовая баскетбольная обувь, которая заложила начало сникер-культуре. Высокий силуэт, контрастные цвета."
    },
    {
      id: 10,
      name: "Adidas Campus",
      imageFilePath: `${this.imageBaseFilePath}/10.jpg`,
      price: 10900,
      brand: "adidas",
      description: "Простые и стильные кеды, изначально баскетбольные, но позже ставшие популярными среди скейтеров и хип-хоперов. Замшевый верх, три полоски."
    },
    {
      id: 11,
      name: "Diadora Maverick",
      imageFilePath: `${this.imageBaseFilePath}/11.jpg`,
      price: 14900,
      brand: "diadora",
      description: "Ретро-беговые кроссовки из Италии. Отличаются изысканным силуэтом, яркими цветами и винтажным шармом 80-х."
    },
    {
      id: 12,
      name: "Nike Air Max 1",
      imageFilePath: `${this.imageBaseFilePath}/12.jpg`,
      price: 13600,
      brand: "nike",
      description: "Первая модель с видимой амортизацией Air (1987). Дизайн Тинкера Хэтфилда стал революцией и началом линейки Air Max."
    },
    {
      id: 13,
      name: "Nike Air Jordan IV",
      imageFilePath: `${this.imageBaseFilePath}/13.jpg`,
      price: 22700,
      brand: "nike",
      description: "Одна из самых узнаваемых моделей Джорданов. Вышла в 1989 году, известна сетчатыми вставками, пластиковыми крыльями и революционным дизайном."
    },
    {
      id: 14,
      name: "Reebok The Pump",
      imageFilePath: `${this.imageBaseFilePath}/14.jpg`,
      price: 33400,
      brand: "reebok",
      description: "Кроссовки с надувной подкладкой для идеальной посадки. Вышли в 1989 и были инновацией своего времени. Особенно популярны были в баскетболе."
    },
    {
      id: 15,
      name: "Nike Air Jordan V",
      imageFilePath: `${this.imageBaseFilePath}/15.jpg`,
      price: 15800,
      brand: "nike",
      description: "Вдохновлены самолетами Второй мировой. Агрессивный силуэт, прозрачная подошва, зубчатый носок. Еще один хит от Тинкера Хэтфилда (1990)."
    }
  ];

  cart: CartProduct[] = [];
  cartValue = 0;

  constructor() { }

  getAllProductsList(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find(product => product.id === id);
  }

  addProductToCart(product: Product, size: number) {
    this.cart.push({product: product, size: size});
    this.cartValue += product.price;
  }

  removeProductFromCart(item: CartProduct) {
    const itemIndex = this.cart.findIndex((value) => value === item);
    this.cart.splice(itemIndex, 1);
    this.cartValue -= item.product.price;
  }

  getProductsFromCart() {
    return this.cart;
  }

  getBrands(): string[] {
    const brands = new Set<string>();
    this.productsList.forEach((product) => {
      if (brands.has(product.brand)) return;
      brands.add(product.brand);
    });

    return Array.from(brands);
  }

  getFeaturedItems(): Product[] {
    return [
      this.productsList[2],
      this.productsList[5],
      this.productsList[8],
      this.productsList[9],
    ]
  }
}
