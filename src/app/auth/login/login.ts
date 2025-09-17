import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { AuthService } from '../../core/services/auth.service';
import { LoginRequest } from '../../core/models/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  protected errorMsg = signal<string | null>(null);
  protected isLoading = signal<boolean>(false);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMsg.set(null);
    this.isLoading.set(true);

    const credentials: LoginRequest = {
      username: this.loginForm.value.username || '',
      password: this.loginForm.value.password || ''
    };

    this.authService.login(credentials).subscribe({
      next: () => {
        this.isLoading.set(false);
        // La redirección se maneja automáticamente en el servicio
      },
      error: (error) => {
        this.errorMsg.set('Credenciales incorrectas');
        this.isLoading.set(false);
      }
    });
  }
}