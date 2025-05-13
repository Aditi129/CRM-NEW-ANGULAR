import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    const { email, password } = this.signupForm.value;

    this.authService.signup(email, password);
    alert('✅ Signup successful! Redirecting to login...');
    this.router.navigate(['/login']);  // Redirect to login page after signup
  }
}