import { CanActivateFn } from '@angular/router';

export const clinicGuard: CanActivateFn = (route, state) => {
  return true;
};
