import { CanActivateFn } from '@angular/router';

export const labGuard: CanActivateFn = (route, state) => {
  return true;
};
