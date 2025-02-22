import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Import the service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    identifier: '',
    user_password: ''
  };

  constructor(private authService: AuthService) {} // Inject the service

  login(form: any) {
    if (form.invalid) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    console.log(this.user, "Sending data...");

    this.authService.login(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);  // Store token
        alert('Login successful!');
        console.log(response);
      },
      error: (error) => {
        alert('Login failed');
        console.error(error);
      },
    });
    

    form.reset();
  }
}
