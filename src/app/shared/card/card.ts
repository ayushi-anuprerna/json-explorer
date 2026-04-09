import { Component } from '@angular/core';
import { Post } from '../../core/interface/post';
import { Input } from '@angular/core';
import { Album } from '../../core/interface/album';
import { Todos } from '../../core/interface/todos';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() data!:Post|Album|Todos
}
