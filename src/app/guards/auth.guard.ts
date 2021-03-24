import { DataGetterService } from './../service/data-getter.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dataGetter: DataGetterService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.dataGetter.getUser() !== '';
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggedIn;
  }
}
