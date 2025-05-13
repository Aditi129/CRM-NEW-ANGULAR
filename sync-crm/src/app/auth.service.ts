import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = new Map<string, string>();

  signup(email: string, password: string) {
    this.users.set(email, password);
  }

  login(email: string, password: string): boolean {
    return this.users.get(email) === password;
  }
}