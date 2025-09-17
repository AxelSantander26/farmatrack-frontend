import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import {
  LucideAngularModule, Home, UserCheck, File,
  Pill, Info, Phone, HelpCircle, User, Lock,
  Eye, EyeOff, LogIn,
  ShoppingCart, PlusCircle, Clock,
  Package, Users, Truck, Settings, LogOut
} from 'lucide-angular';

// Importa el interceptor
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor]) // ← Añade el interceptor aquí
    ),
    importProvidersFrom(LucideAngularModule.pick({
      Home, UserCheck, File, Pill, Info, Phone, HelpCircle, User, Lock, Eye, EyeOff, LogIn,
      // Iconos adicionales para el sidebar
      ShoppingCart, PlusCircle, Clock, Package, Users, Truck, Settings, LogOut
    }))
  ]
};