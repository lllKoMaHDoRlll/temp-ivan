import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  scrollToProductsList() {
    (document.getElementById("products-list") as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
