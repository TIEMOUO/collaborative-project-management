import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    private apiUrl = 'http://localhost:5000/api/auth';
    
    constructor(private http: HttpClient) {}

    //LOGIN
    login(data:{ email:string, password:string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, data);
    }

    //REGISTER
    register(data:{ name:string, email:string, password:string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, data);
    }

    saveToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken(): string | null {
      return localStorage.getItem('token');
    }

    logout() {
      localStorage.removeItem('token');
    }
    
    isAuthenticated(): boolean {
      return !!this.getToken();
    }
  }
