import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Receita } from '../models/receitas.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasStateService {

  private receitasList = new BehaviorSubject<Array<Receita>>([
    {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }, {
      data: new Date(),
      descricao: "Salario",
      valor: 1000
    }
  ]);

  constructor() { }

  public getReceitasList(): Observable<Receita[]> {
    return this.receitasList.asObservable();
  }

  public setReceitasList(receitasList: Receita[]): void {
    this.receitasList.next(receitasList);
  }
}
