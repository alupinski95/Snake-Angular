import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ScoreFacade } from 'src/shared/facade/score.facade';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorizeGuard implements CanActivate {
  constructor(private scoreFacade: ScoreFacade) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.scoreFacade.isTokenValid;
  }

}
