import { Component } from '@angular/core';
import { delay, map } from 'rxjs';
import { Receita } from 'src/app/shared/models/receitas.model';
import { ReceitasStateService } from 'src/app/shared/states/receitas-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public receitasList: Receita[] = [];

  constructor(private receitasState: ReceitasStateService) {
    receitasState.getReceitasList()
      .pipe(
        map((receitasList) => {
          return receitasList.slice(0, 5);
        }),
        delay(3000)
      )
      .subscribe((receitasList) => {
        this.receitasList = receitasList;
      })
  }
}
