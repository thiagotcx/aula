import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
