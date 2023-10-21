import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasComponent } from './receitas/receitas.component';
import { DespesasComponent } from './despesas/despesas.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { AutenticacaoGuard } from '../shared/guards/autenticacao.guard';



@NgModule({
  declarations: [
    ReceitasComponent,
    DespesasComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ],
  providers: [
  ]
})
export class RelatoriosModule { }
