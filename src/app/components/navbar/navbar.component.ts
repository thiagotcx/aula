import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoState } from 'src/app/shared/states/autenticacao.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isAuth: boolean = false;
  public userName: String = "";

  constructor(
    private authState: AutenticacaoState,
    private router: Router
  ) {
    authState.getIsAuth().subscribe((isAuthenticaed) => {
      console.log('observable isAuthenticaed', { isAuthenticaed })
      this.isAuth = isAuthenticaed;
    });

    authState.getUserName().subscribe((userName) => {
      console.log('observable userName', { userName })
      this.userName = userName;
    });
  }

  public login(): void {
    this.router.navigate(["main", "login"])
  }

  public logout(): void {
    this.authState.setIsAuth(false);
    this.router.navigate(["main", "login"])

    console.log('logout', {
      isAuth: this.isAuth,
      state: this.authState.getIsAuth()
    })
  }

}
