import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const isAuthGuard: CanActivateFn = () => {
  console.log();
  const router = inject(Router);
  const authService = inject(AuthService);
  if (!authService.isLoggedIn) {
    router.navigate(['/login']);
  }
  return authService.isLoggedIn;
};
