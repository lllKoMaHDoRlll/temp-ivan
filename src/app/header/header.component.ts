import { Component } from '@angular/core';
import { HeaderModule } from '@coreui/angular';
import { ContainerComponent } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { DropdownModule } from '@coreui/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderModule,
    ContainerComponent,
    NavModule,
    DropdownModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
