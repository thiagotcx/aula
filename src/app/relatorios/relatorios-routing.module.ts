import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AutenticacaoGuard } from '../shared/guards/autenticacao.guard';

const routes: Routes = [
  {
    path: 'despesas',
    component: DespesasComponent,
    canActivate: [AutenticacaoGuard]
  },
  {
    path: 'receitas',
    component: ReceitasComponent,
    canActivate: [AutenticacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
