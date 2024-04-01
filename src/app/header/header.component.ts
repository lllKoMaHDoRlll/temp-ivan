import { Component } from '@angular/core';
import { HeaderModule } from '@coreui/angular';
import { ContainerComponent } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { DropdownModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderModule,
    ContainerComponent,
    NavModule,
    DropdownModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToProductsList() {
    (document.getElementById("products-list") as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  scrollToContacts() {
    (document.getElementById("contacts") as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  scrollToForm() {
    (document.getElementById("form-outter") as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
