import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})

export class SessionNotExistGuard implements CanActivate {
  constructor(
    private session:SessionService,
    private router: Router
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(this.session.get() == null) {
      return this.router.navigate(['login']).then(resp => false);
    }
    return true;
  }

}

@Injectable({
  providedIn: 'root'
})

export class SessionExistGuard implements CanActivate {
  constructor(
    private session:SessionService,
    private router: Router
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(this.session.get() != null) {
      return this.router.navigate(['home/welcome']).then(() => false);
    }
    return true;
  }

}

