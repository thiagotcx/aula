import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Autenticacao guard em funcionamento na rota', route.url)
    const isAutenticated: boolean = true;

    if (isAutenticated) {
      alert('login executado com sucesso')
      return true;
    }

    // redirecionar ele para rota Login
    this.router.navigate(['/']);

    return false;
  }
}
