import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoState {

  private isAuth: boolean = true;

  constructor() { }

  public getIsAuth(): boolean {
    return this.isAuth;
  }

  public get getIsAuthenticated(): boolean {
    return this.isAuth
  }

  public setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth
  }

  public set setIsAuthenticated(isAuth: boolean) {
    this.isAuth = isAuth
  }


}
