import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signup(form: any) {
    if (form.invalid) {
      alert("Please fill all required fields.");
      return;
    }

    const apiUrl = 'http://localhost:3000/auth/signup';

    this.http.post(apiUrl, this.newUser, { 
      withCredentials: true // Critical for cookies
    }).subscribe({
      next: (response: any) => {
        alert('Registration successful!');
        this.router.navigate(['/']); // Redirect to home/dashboard
        form.reset();
      },
      error: (error) => {
        alert(`Error: ${error.error?.message || 'Registration failed'}`);
        console.error(error);
      }
    });
  }
}