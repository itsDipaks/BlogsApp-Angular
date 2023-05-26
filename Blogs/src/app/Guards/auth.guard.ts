import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
let token=localStorage.getItem("token")
if(token){
  return true
}else{
  return false
}

};


