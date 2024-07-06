import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("Admintoken")!==null){
    return true;
  }
  else{
    return false
  }
  
};
