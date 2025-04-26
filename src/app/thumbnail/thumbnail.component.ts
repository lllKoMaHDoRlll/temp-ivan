import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    RouterModule
  ],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent { }
