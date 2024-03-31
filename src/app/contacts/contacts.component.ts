import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { faVk, faTelegram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    MatListModule,
    MatDivider,
    FontAwesomeModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  faVk = faVk;
  faTelegram = faTelegram;
  faXTwitter = faXTwitter;
  faLinkedin = faLinkedin;
}
