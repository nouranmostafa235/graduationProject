import { CanActivateFn } from '@angular/router';

export const clinicGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("clinicTokin")!==null){
    return true;
  }
  else{
    return false;
  }
};
