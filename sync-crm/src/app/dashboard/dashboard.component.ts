import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username = 'User'; // You can dynamically fetch this from authentication or local storage

  constructor(private router: Router) {}

  logout() {
    alert('❌ Logging out...');
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}