import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // Directly bind to the observables
  get username$() {
    return this.authService.username$;
  }

  get isLoggedIn$() {
    return this.authService.isLoggedIn$;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    console.log("hey i am from logout")
    this.authService.logout();
  }
}
