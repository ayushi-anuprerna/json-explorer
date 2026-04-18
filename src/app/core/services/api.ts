import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { Album } from '../interface/album';
import { Todos } from '../interface/todos';
@Injectable({
  providedIn: 'root',
})



export class ApiService {
  base_url="https://jsonplaceholder.typicode.com"

  public posts = signal<Post[]>([])
  public albums = signal<Album[]>([])
  public todos = signal<Todos[]>([])

  constructor(private _http:HttpClient){}

  public getPosts():void{
  this._http.get<Post[]>(`${this.base_url}/posts`).subscribe({
    next: (post: Post[]) => {
      this.posts.set(post)
    },
    error: (error: HttpErrorResponse) => {
      console.log(error)
    }
  })
  }
  
  public getAlbums():void{
     this._http.get<Album[]>(`${this.base_url}/albums`).subscribe({
      next: (album : Album[]) => {
        this.albums.set(album)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    }) //intentionally wrong to see error loader message
  }

  public getTodos():void{
     this._http.get<Todos[]>(`${this.base_url}/todos`).subscribe({
      next: (todos: Todos[]) => {
        this.todos.set(todos)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }
}
