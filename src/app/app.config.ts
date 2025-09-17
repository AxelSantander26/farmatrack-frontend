import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  LucideAngularModule, Home, UserCheck, File,
  Pill, Info, Phone, HelpCircle, User, Lock,
  Eye, EyeOff, LogIn,
  ShoppingCart, PlusCircle, Clock,
  Package, Users, Truck, Settings, LogOut
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      Home, UserCheck, File, Pill, Info, Phone, HelpCircle, User, Lock, Eye, EyeOff, LogIn,
      // Iconos adicionales para el sidebar
      ShoppingCart, PlusCircle, Clock, Package, Users, Truck, Settings, LogOut
    }))
  ]
};