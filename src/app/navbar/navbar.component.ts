import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false; // Replace with actual login state
  username: string = 'User123'; // Replace with actual logged-in username
  showLogoutDropdown: boolean = false;

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]); // Navigate to the respective route
  }

  toggleLogoutDropdown(): void {
    this.showLogoutDropdown = !this.showLogoutDropdown;
  }

  logout(): void {
    // Handle logout logic here
    this.isLoggedIn = false;
    this.showLogoutDropdown = false;
    // Redirect or reset state
    this.router.navigate(['/login']);
  }
}
