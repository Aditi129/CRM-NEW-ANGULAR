import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = new Map<string, string>();

  signup(email: string, password: string) {
  localStorage.setItem(email, password); // Store credentials persistently
}

login(email: string, password: string): boolean {
  return localStorage.getItem(email) === password; // Check stored credentials
}
}