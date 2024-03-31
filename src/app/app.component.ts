import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ThumbnailComponent,
    ProductsListComponent,
    ContactsComponent,
    FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
