import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';  // Import NavComponent

@Component({
  standalone: true,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [NavComponent]  // Ensure NavComponent is included
})
export class MainPageComponent {}