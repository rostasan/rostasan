import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private authService: AuthService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authState
      .pipe(
        map((user) => {
        if (!user) {
          this.router.navigate(['../login']);
        }
        return !!user; // double bang casts a boolean
      }));

  }
}
