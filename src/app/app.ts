import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/nav-bar/nav-bar';
import { ApiService } from './core/services/api';
import { Post } from './core/interface/post';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('json-explorer');
  display_post_data:Post[]=[]
  constructor(private _api:ApiService){
    this._api.getPosts().subscribe((post)=>{
      this.display_post_data=post
      console.log(this.display_post_data)
    })
  }


}



