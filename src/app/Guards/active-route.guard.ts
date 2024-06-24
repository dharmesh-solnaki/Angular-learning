import { CanActivateFn } from '@angular/router';

export const activeRouteGuard: CanActivateFn = () => {
  const token = localStorage.getItem('Token');

  return token ? true : false;
};
