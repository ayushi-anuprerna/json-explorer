import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api';
import { Todos } from '../../core/interface/todos';
import { Card } from '../../shared/card/card';
@Component({
  selector: 'app-todos',
  imports: [Card],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class TodosComponent {
  public store_todos:Todos[]=[];
constructor(private _api:ApiService ){
  _api.getTodos().subscribe((todos)=>{
    this.store_todos=todos
  })
}
}
