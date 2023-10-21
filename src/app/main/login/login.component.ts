import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidators } from 'src/app/shared/validators/email-validator';
import { passwordValidators } from 'src/app/shared/validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public teste: string = "asdasd"

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', emailValidators],
      password: ['', passwordValidators]
    })
  }

  loginFormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email, Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ])
  })

  emailFormControl = new FormControl('', [
    Validators.required, Validators.email, Validators.minLength(5)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required, Validators.minLength(5)
  ]);

  public showValidateEmailMessage(): string {
    if (this.loginForm.get('email')?.hasError('email')
      && !this.loginForm.get('email')?.hasError('minlength')) {
      return "E-mail mal formatado"
    }

    if (this.loginForm.get('email')?.hasError('required')) {
      return "E-mail obrigatório"
    }

    if (this.loginForm.get('email')?.hasError('minlength')) {
      return "Mínimo de caracteres: 5"
    }

    return "Erro no e-mail"
  }
  public showValidatePasswordMessage(): string {
    if (this.loginForm.get('password')?.hasError('required')) {
      return "Senha obrigatória"
    }

    if (this.loginForm.get('password')?.hasError('minlength')) {
      return "Mínimo de caracteres: 5"
    }

    return "Erro na senha"
  }

  public formIsDisabled(): boolean {
    return this.loginForm.invalid
  }

  public onSubmit(): void {
    console.log(' enviar formulario', { ...this.loginForm.value })

    //enviar campos de login para backend
  }

  public clear(): void {
    this.loginForm.reset()
  }
}


