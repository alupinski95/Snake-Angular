import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ScoreFacade } from 'src/shared/facade/score.facade';

@Injectable({
    providedIn: 'root'
})
export class UserAuthorizeGuard implements CanActivate {
    constructor(private scoreFacade: ScoreFacade, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.scoreFacade.isTokenValid) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    }

}
