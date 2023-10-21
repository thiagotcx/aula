import { Component } from '@angular/core';
import { Receita } from 'src/app/shared/models/receitas.model';
import { ReceitasStateService } from 'src/app/shared/states/receitas-state.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

  public receitasList: Receita[] = [];

  constructor(private receitasState: ReceitasStateService) {
    receitasState.getReceitasList()
      .subscribe((receitasList) => {
        this.receitasList = receitasList;
      })
  }

}
