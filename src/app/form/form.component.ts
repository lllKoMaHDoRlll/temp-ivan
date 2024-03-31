import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatDivider,
    MatButtonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
