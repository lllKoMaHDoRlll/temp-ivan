import { FormComponent } from './../form/form.component';
import { ContactsComponent } from './../contacts/contacts.component';
import { ProductsListComponent } from './../products-list/products-list.component';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';
import { Component } from '@angular/core';
import { FeaturedItemsListComponent } from '../featured-items-list/featured-items-list.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ThumbnailComponent,
    FeaturedItemsListComponent,
    ContactsComponent,
    FormComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
