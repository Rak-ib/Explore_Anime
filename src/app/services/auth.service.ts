import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://exploreanimebackend.vercel.app/auth';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string | null>(null);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.http.get<{ username: string }>(`${this.authUrl}/check-auth`, { withCredentials: true }).subscribe({
        next: (response) => {
          this.isLoggedInSubject.next(true);
          this.usernameSubject.next(response.username);
        },
        error: () => {
          this.isLoggedInSubject.next(false);
          this.usernameSubject.next(null);
        }
      });
    } else {
      this.isLoggedInSubject.next(false);
      this.usernameSubject.next(null);
    }
  }

  login(user: any): Observable<any> {
    return this.http.post<{ username: string, token: string }>(`${this.authUrl}/login`, user, { withCredentials: true }).pipe(
      tap((response) => {
        console.log("from auth service.ts",response)
        // Store the login state and username after successful login
        this.isLoggedInSubject.next(true);
        this.usernameSubject.next(response.username);

        // Optionally store token for persistence
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/']);
      })
    );
  }

  logout() {
    this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
      this.isLoggedInSubject.next(false);
      this.usernameSubject.next(null);
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    });
  }
}
