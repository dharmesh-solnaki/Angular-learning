import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const activeRouteGuard: CanActivateFn = () => {
  const token = localStorage.getItem('authToken');
  const route = inject(Router);
  if (!token) {
    route.navigate(['/login']);
    return false;
  }
  return true;
};
