import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { Album } from '../interface/album';
import { Todos } from '../interface/todos';
@Injectable({
  providedIn: 'root',
})



export class ApiService {
  base_url="https://jsonplaceholder.typicode.com/"

  constructor(private _http:HttpClient){}

  public getPosts():Observable<Post[]>{
    return this._http.get<Post[]>(`${this.base_url}/posts`)
  }
  
  public getAlbums():Observable<Album[]>{
    return this._http.get<Album[]>(`${this.base_url}/albums`)
  }

  public getTodos():Observable<Todos[]>{
    return this._http.get<Todos[]>(`${this.base_url}/todos`)
  }
}
