import { Component } from '@angular/core';
import { Post } from '../../core/interface/post-interface';
import { Input } from '@angular/core';
import { Album } from '../../core/interface/album-interface';
import { Todos } from '../../core/interface/todos-interface';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() id!:number
@Input() body!:string
@Input() title!:string
@Input() completed!:boolean
@Input() userId!:number
}
