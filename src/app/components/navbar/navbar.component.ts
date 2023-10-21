import { Component } from '@angular/core';
import { AutenticacaoState } from 'src/app/shared/states/autenticacao.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isAuth: boolean;

  constructor(private authState: AutenticacaoState) {
    this.isAuth = authState.getIsAuth();
  }

  public logout(): void {
    this.authState.setIsAuth(false);
    this.isAuth = false

    console.log({
      isAuth: this.isAuth,
      state: this.authState.getIsAuth()
    })
  }

}
