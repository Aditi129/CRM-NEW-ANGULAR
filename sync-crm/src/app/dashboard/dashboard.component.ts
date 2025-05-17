import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent {
  email: string = localStorage.getItem('email') || 'User'; // Display stored email
  activities: string[] = ['Viewed leads', 'Updated company details', 'Checked deadlines'];
  
  taskCount = 4; // Matches the image
  leadCount = 29;
  companyCount = 4;

  constructor(private router: Router) {}

  navigateTo(section: string) {
    this.router.navigate([`/${section}`]);
  }

  logout() {
    alert('❌ Logging out...');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
}