import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const skipAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log(authService.isLoggedIn);
  if (authService.isLoggedIn) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
