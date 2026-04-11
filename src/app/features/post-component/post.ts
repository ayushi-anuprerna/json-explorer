import { Component } from '@angular/core';
import { Post } from '../../core/interface/post';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Loader } from '../../shared/loader/loader';
import { delay,debounceTime,distinctUntilChanged } from 'rxjs';
import { error } from 'console';
import { FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  imports: [Card,Loader,ReactiveFormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class PostComponent implements OnInit{
  public search=new FormControl('')
  public isLoading:boolean=true
  public errorMsg:string=""
  public errorCode:number=0
  public store_post: Post[] = []
  public filteredPosts:Post[]=[]

  constructor(private _api: ApiService) {}
  ngOnInit(){

    this._api.getPosts().pipe(delay(5000)).subscribe((post) => {
      this.store_post=post
      this.filteredPosts=post
      this.isLoading=false
    },(error)=>{
      this.errorMsg=error.message
      this.errorCode=error.status
      this.isLoading=false

      const code=Math.floor(this.errorCode/100)
      switch (code){
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
      
    }
    
  );
    this.search.valueChanges.pipe(distinctUntilChanged()).subscribe((searchTitle) => {
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



