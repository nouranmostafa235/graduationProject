import { CanActivateFn } from '@angular/router';

export const labGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("labTokin")!==null){
    return true;
  }
  else{
    return false;
  }
  
};
