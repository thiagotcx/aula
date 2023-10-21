import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoState } from '../states/autenticacao.state';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(
    private router: Router,
    private authState: AutenticacaoState
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Autenticacao guard em funcionamento na rota', route.url)


    if (this.authState.getIsAuthenticated) {
      return true;
    }

    // redirecionar ele para rota Login
    this.router.navigate(['/']);

    return false;
  }
}
