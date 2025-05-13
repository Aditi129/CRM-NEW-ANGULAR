import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { NavComponent } from './nav/nav.component';  

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavComponent, RouterModule]  
})
export class AppComponent {
  title = 'Sync CRM';  // title
}