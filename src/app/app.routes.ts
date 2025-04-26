import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'catalog',
    component: ProductsListComponent,
    title: 'Каталог',
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    title: 'Product',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
];
