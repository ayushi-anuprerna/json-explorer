import { Component, effect } from '@angular/core';
import { Post } from '../../core/interface/post-interface';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card-component/card-component';
import { Loader } from '../../shared/loader-component/loader-component';
import { delay,debounceTime,distinctUntilChanged } from 'rxjs';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ErrorHandler } from '../../error-handler/error-handler';

@Component({
  selector: 'app-post',
  imports: [Card,Loader,ReactiveFormsModule,ErrorHandler],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class PostComponent
{
  public search=new FormControl('')
  public isLoading:boolean=true
  public errorMsg:string=""
  public errorCode:number=0
  public store_post: Post[] = []
  public filteredPosts:Post[]=[]

  constructor(private _api: ApiService) {
    this._api.getPosts()

    effect(()=> {
       if(this._api.posts().length>0){
      this.store_post=this._api.posts()
      this.filteredPosts=this._api.posts()
      this.isLoading=false
    

    }
    }),
    effect(()=> {
      if(this._api.posts_error()?.status){
        this.errorMsg=this._api.posts_error()?.message || "unknown error"
      this.errorCode=this._api.posts_error()?.status || 0
      this.isLoading=false  
      
     
  
      }
    })
      

      
    
    
    this.search.valueChanges.pipe(debounceTime(200),distinctUntilChanged()).subscribe((searchTitle) => {
        this.filterPosts(searchTitle || '');
      });
  }
private filterPosts(searchTerm:string):void{
  const term=searchTerm.toLowerCase().trim();
  if(!term){
    this.filteredPosts=this.store_post} 
    else{
      this.filteredPosts=this.store_post.filter(post=> post.title.toLowerCase().includes(term));
    }
  }
}



