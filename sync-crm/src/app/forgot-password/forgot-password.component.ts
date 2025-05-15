import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [ReactiveFormsModule]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword() {
    if (this.forgotPasswordForm.invalid) {
      alert('❌ Please enter a valid email.');
      return;
    }

    const { email } = this.forgotPasswordForm.value;
    alert(`✅ A password reset link has been sent to ${email}.`);
  }
}