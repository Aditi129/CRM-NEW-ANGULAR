import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule],
  providers: [AuthService]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // Username validation
      email: ['', [Validators.required, Validators.email]], // Email validation
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10-digit phone number validation
      password: ['', [Validators.required, Validators.minLength(6)]] // Password validation
    });
  }

  signup() {
    if (this.signupForm.invalid) {
      alert('❌ Please enter valid details.');
      return;
    }

    const { username, email, phone, password } = this.signupForm.value;

    this.authService.signup(email, password); // Storing email & password
    alert(`✅ Signup successful! Welcome, ${username}. Redirecting to login...`);
    this.router.navigate(['/login']);  // Redirect to login page after signup
  }
}