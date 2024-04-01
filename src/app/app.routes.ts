import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    title: 'Product'
  }
];
