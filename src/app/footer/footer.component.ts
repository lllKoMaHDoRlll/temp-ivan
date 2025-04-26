import { Component } from '@angular/core';
import { FooterComponent as CoreUIFooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CoreUIFooterComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
