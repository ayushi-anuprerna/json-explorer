import { Component } from '@angular/core';
import { Album } from '../../core/interface/album';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card/card';
@Component({
  selector: 'app-album',
  imports: [Card],
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class AlbumComponent {
public store_album: Album[] = [];
constructor(private _api:ApiService){
  _api.getAlbums().subscribe((album) => {
    this.store_album=album
  })
}
}
