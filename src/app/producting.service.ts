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
      price: 100,
      description: "Кожаные кроссовки, созданные для баскетбольных площадок и ставшие легендой уличной культуры."
    },
    {
      id: 2,
      name: "Onitsuka Tiger",
      imageFilePath: `${this.imageBaseFilePath}/2.jpg`,
      price: 70,
      description: "Современная версия классической беговой модели японской спортивной компании ASICS."
    },
    {
      id: 3,
      name: "Adidas Smith",
      imageFilePath: `${this.imageBaseFilePath}/3.jpg`,
      price: 120,
      description: "Классика вне времени. Непринужденная лаконичность. Повседневная универсальность."
    },
    {
      id: 4,
      name: "Converse Pro",
      imageFilePath: `${this.imageBaseFilePath}/4.jpg`,
      price: 200,
      description: "Популяризация модели произошла после подписания контракта между Converse и Джулиусом Ирвингом. В этих кроссовках играл и Майкл Джордан."
    },
    {
      id: 5,
      name: "Vans SK8 Hi",
      imageFilePath: `${this.imageBaseFilePath}/5.jpg`,
      price: 175,
      description: "Высокие кеды Vans U SK8-HI — обновленная вариация легендарной модели бренда."
    },
    {
      id: 6,
      name: "Nike Lava Dome",
      imageFilePath: `${this.imageBaseFilePath}/6.jpg`,
      price: 130,
      description: "Возьмите в руки Nike Lava Dome от лучших производителей кроссовок по всему миру."
    },
    {
      id: 7,
      name: "Adidas Forum",
      imageFilePath: `${this.imageBaseFilePath}/7.jpg`,
      price: 220,
      description: "Каждая пара — это синтез привычных и новых современных деталей. Модель adidas Forum Low отличается многослойным кожаным верхом и стильным колорблоком."
    },
    {
      id: 8,
      name: "NB 1300",
      imageFilePath: `${this.imageBaseFilePath}/8.jpg`,
      price: 200,
      description: "Вдохновлен игрой в баскетбол, но идеально вписывается в повседневные аутфиты за пределами спортивной площадки."
    },
    {
      id: 9,
      name: "Nike Air Jordan",
      imageFilePath: `${this.imageBaseFilePath}/9.jpg`,
      price: 300,
      description: "Легендарный дизайн в новой стильной расцветке."
    },
    {
      id: 10,
      name: "Adidas Campus",
      imageFilePath: `${this.imageBaseFilePath}/10.jpg`,
      price: 110,
      description: "Мода 90-х остается в тренде. Почувствуйте яркую энергетику того десятилетия."
    },
    {
      id: 11,
      name: "Diadora Maverick",
      imageFilePath: `${this.imageBaseFilePath}/11.jpg`,
      price: 150,
      description: "Сочетание сразу нескольких материалов в кроссовках позволяет с легкостью адаптировать их под любой аутфит."
    },
    {
      id: 12,
      name: "Nike Air Max 1",
      imageFilePath: `${this.imageBaseFilePath}/12.jpg`,
      price: 140,
      description: "Кроссовки сочетают в себе ретро-визуал и современные технологии. Верх пары выполнен из дышащего текстиля и прочных кожаных вставок."
    },
    {
      id: 13,
      name: "Nike Air Jordan IV",
      imageFilePath: `${this.imageBaseFilePath}/13.jpg`,
      price: 230,
      description: "Air Jordan IV стали дебютными кроссовками Jordan Brand, с которыми все прошло без проблем."
    },
    {
      id: 14,
      name: "Reebok The Pump",
      imageFilePath: `${this.imageBaseFilePath}/14.jpg`,
      price: 370,
      description: "Пара с завышенным силуэтом выполнена из искусственной кожи с текстильными вставками."
    },
    {
      id: 15,
      name: "Nike Air Jordan V",
      imageFilePath: `${this.imageBaseFilePath}/15.jpg`,
      price: 200,
      description: "Кроссовки Air Jordan 5 были разработаны Тинкером Хэтфилдом, легендарным дизайнером Nike, подарившим миру серию Air Max и многие другие хиты. Внешний вид Air Jordan 5 был вдохновлен самолетами."
    }
  ];
  constructor() { }

  getAllProductsList(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find(product => product.id === id);
  }
}
