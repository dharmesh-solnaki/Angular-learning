import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const hasRoleGuardGuard: CanActivateFn = () => {
   const role = localStorage.getItem('authRole');
   const route = inject(Router)
   if (role && role === 'Admin') {
    return true;
   }
   route.navigate(['/access-denied'])
   return false;
};
