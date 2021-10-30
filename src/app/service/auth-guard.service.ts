import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router
            , private authService: AuthenticateService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: {'returnURL': state.url}});
    return false;
  }
}
