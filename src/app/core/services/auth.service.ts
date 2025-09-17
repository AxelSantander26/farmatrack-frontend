import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

import { LoginRequest, JwtResponse, DecodedToken } from '../models/auth';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);

    private apiUrl = `${environment.apiBaseUrl}/auth`;
    private authStatus = new BehaviorSubject<boolean>(this.hasValidToken());
    public authStatus$ = this.authStatus.asObservable();

    login(credentials: LoginRequest): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                this.storeTokens(response);
                this.authStatus.next(true);

                // Redirección automática después del login exitoso
                this.router.navigate(['/dashboard']);
            })
        );
    }

    logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_role');
        this.authStatus.next(false);
        this.router.navigate(['/login']);
    }

    getAccessToken(): string | null {
        return localStorage.getItem('access_token');
    }

    getCurrentUserRole(): string | null {
        return localStorage.getItem('user_role');
    }

    isAuthenticated(): boolean {
        return this.hasValidToken();
    }

    private storeTokens(tokens: JwtResponse): void {
        localStorage.setItem('access_token', tokens.access_token);
        localStorage.setItem('refresh_token', tokens.refresh_token);

        const decoded = this.decodeToken(tokens.access_token);
        if (decoded?.role) {
            localStorage.setItem('user_role', decoded.role);
        }
    }

    private decodeToken(token: string): DecodedToken | null {
        try {
            return jwtDecode<DecodedToken>(token);
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    private hasValidToken(): boolean {
        const token = this.getAccessToken();
        if (!token) return false;

        const decoded = this.decodeToken(token);
        if (!decoded || !decoded.exp) return false;

        // Check if token is expired
        return decoded.exp * 1000 > Date.now();
    }
}