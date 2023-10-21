import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'main/login', pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module')
      .then(m => m.MainModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module')
      .then(m => m.RelatoriosModule)
  },
  {
    path: "**", redirectTo: 'main/pagina-nao-encontrada'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
