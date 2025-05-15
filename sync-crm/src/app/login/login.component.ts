import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for redirects
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule], 
  providers: [AuthService]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validate email
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validate password
    });
  }

  login() {
    const { email, password } = this.loginForm.value;

    if (this.authService.login(email, password)) {
      alert('✅ Login successful!');
      this.router.navigate(['/']);  // Redirect to home page
    } else {
      alert('❌ Invalid credentials. Please try again.');
    }
  }

navigateToForgotPassword() {
  console.log('Navigating to Forgot Password...');
  this.router.navigate(['/forgot-password']);
}
}