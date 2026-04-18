import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/post-interface';
import { Album } from '../interface/album-interface';
import { Todos } from '../interface/todos-interface';

@Injectable({
  providedIn: 'root',
})



export class ApiService {
  base_url="https://jsonplaceholder.typicode.com"

  public posts = signal<Post[]>([])
  public albums = signal<Album[]>([])
  public todos = signal<Todos[]>([])

  public posts_error = signal<HttpErrorResponse | null>(null)
  public albums_error = signal<HttpErrorResponse | null>(null)
  public todos_error = signal<HttpErrorResponse | null>(null)

  constructor(private _http:HttpClient){}

  public getPosts():void{
  this._http.get<Post[]>(`${this.base_url}/posts`).subscribe({
    next: (post: Post[]) => {
      this.posts.set(post)
    },
    error: (error: HttpErrorResponse) => {
      this.posts_error.set(error)

    }
  })
  }
  
  public getAlbums():void{
     this._http.get<Album[]>(`${this.base_url}/albums`).subscribe({
      next: (album : Album[]) => {
        this.albums.set(album)
      },
      error: (error: HttpErrorResponse) => {
        this.albums_error.set(error)
      }
    }) //intentionally wrong to see error loader message
  }

  public getTodos():void{
     this._http.get<Todos[]>(`${this.base_url}/todos`).subscribe({
      next: (todos: Todos[]) => {
        this.todos.set(todos)
      },
      error: (error: HttpErrorResponse) => {
        this.todos_error.set(error)
      }
    })
  }
}
