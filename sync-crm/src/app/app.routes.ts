import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: MainPageComponent },  // Home/Main Page
  { path: 'login', component: LoginComponent },  // Login Page
  { path: 'signup', component: SignupComponent } , // Signup Page
  { path: 'forgot-password', component: ForgotPasswordComponent },// new route for forgot password
  { path: 'dashboard', component: DashboardComponent } // New dashboard route

];