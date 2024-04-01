import { FormComponent } from './../form/form.component';
import { ContactsComponent } from './../contacts/contacts.component';
import { ProductsListComponent } from './../products-list/products-list.component';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ThumbnailComponent,
    ProductsListComponent,
    ContactsComponent,
    FormComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
