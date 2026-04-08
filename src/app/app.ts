import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './core/services/api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('json-explorer');
  constructor(private _api:ApiService){
    this._api.getPosts().subscribe((post)=>{
      console.log(post)
    })
  }


}



