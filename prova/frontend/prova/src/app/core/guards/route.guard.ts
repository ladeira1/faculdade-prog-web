import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate() {
    const storageCredentials = localStorage.getItem('prova:user.credentials');
    if (!storageCredentials) this.router.navigateByUrl('/');

    return storageCredentials !== null && storageCredentials !== undefined;
  }
}
