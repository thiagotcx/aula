import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoState {

  private isAuth = new BehaviorSubject<boolean>(false);
  private isAuthenticated: boolean = false;
  private userName = new BehaviorSubject<string>("");

  constructor() { }

  public getIsAuth(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  public get getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public setIsAuth(isAuth: boolean) {
    this.isAuth.next(isAuth)
    this.isAuthenticated = isAuth;
  }

  public set setIsAuthenticated(isAuth: boolean) {
    this.isAuth.next(isAuth)
    this.isAuthenticated = isAuth;
  }


  public getUserName(): Observable<string> {
    return this.userName.asObservable();
  }

  public setUserName(userName: string) {
    this.userName.next(userName)
  }


}
