import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Registration and Login';

  registeredName = '';
  registeredPassword = '';
  registeredEmail = '';
  registeredAddress = '';
  registeredContact = '';

  loginStatus = '';
  showProfile = false;

  // Register user
  register(name: string, address: string, contact: string, email: string, password: string) {
    this.registeredName = name;
    this.registeredAddress = address;
    this.registeredContact = contact;
    this.registeredEmail = email;
    this.registeredPassword = password;
    this.loginStatus = 'User registered successfully.';
    this.showProfile = false;
  }

  // Login user
  login(name: string, password: string) {
    if (name === this.registeredName && password === this.registeredPassword) {
      this.loginStatus = 'Login successful.';
      this.showProfile = true;
    } else {
      this.loginStatus = 'Invalid credentials.';
      this.showProfile = false;
    }
  }
}
