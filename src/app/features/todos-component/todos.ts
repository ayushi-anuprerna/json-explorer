import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api';
import { Todos } from '../../core/interface/todos';
import { Card } from '../../shared/card/card';
import { Loader } from '../../shared/loader/loader';
import { delay } from 'rxjs';
import { error } from 'console';
@Component({
  selector: 'app-todos',
  imports: [Card,Loader],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})

export class TodosComponent {
  public isloading:boolean=true
  public errorMsg:string =""
  public errorCode:number=0
  public store_todos:Todos[]=[];
constructor(private _api:ApiService ){
  _api.getTodos().pipe(delay(5000)).subscribe((todos)=>{
    this.store_todos=todos
    this.isloading=false
  },(error)=>{
    this.errorMsg=error.message
    this.errorCode=error.status  
    console.log(this.errorCode)          
    this.isloading=false
    
    const code=Math.floor(this.errorCode/100)
    switch(code){
      case 1:
        this.errorMsg="Your request is being processed.Please wait.."
        break;
      case 2:
        this.errorMsg="Request successfull.Data loaded properly"
        break;
      case 3:
        this.errorMsg="You are being redirected.Please wait.."
        break;
      case 4:
        this.errorMsg="There was an issue with your request.Please check and try again"
        break;
      case 5:
        this.errorMsg="Something went wrong on our side.Please try again later"
        break;
      default:
        this.errorMsg="Cannot recognize"
        break;

    }
  })
}
}
