import { Component, effect } from '@angular/core';
import { ApiService } from '../../core/services/api';
import { Todos } from '../../core/interface/todos-interface';
import { Card } from '../../shared/card-component/card-component';
import { Loader } from '../../shared/loader-component/loader-component';
import { delay,distinctUntilChanged} from 'rxjs';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '../../error-handler/error-handler';

@Component({
  selector: 'app-todos',
  imports: [Card,Loader,ErrorHandler],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})

export class TodosComponent {
  public isloading:boolean=true
  public errorMsg:string =""
  public errorCode:number=0
  public store_todos:Todos[]=[];
  public filteredTodos:Todos[]=[]
  
constructor(private _api:ApiService ){
  this._api.getTodos()
  effect(()=> {
    if(this._api.todos().length>0){
       this.store_todos=this._api.todos()
    this.filteredTodos=this._api.todos()
    this.isloading=false
    }
   
  })

  effect(()=>{
    if(this._api.todos_error()?.status){
      this.errorMsg=this._api.todos_error()?.message || "unknown error"
      this.errorCode=this._api.todos_error()?.status || 0
       this.isloading=false
    
     
  }
  })
   
    
  }
  }

