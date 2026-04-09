import { Component } from '@angular/core';
import { Post } from '../../core/interface/post';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-post',
  imports: [Card],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class PostComponent {
  public store_post: Post[] = [];
  constructor(private _api: ApiService) {
    _api.getPosts().subscribe((post) => {
      this.store_post=post
    });
  }
}
