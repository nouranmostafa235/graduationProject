import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("Authorization")!==null){
     return true;
  }
  else{
    return false
  }
 
};
