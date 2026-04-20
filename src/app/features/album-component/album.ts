import { HttpErrorResponse } from '@angular/common/http';
import { Component, effect, OnInit } from '@angular/core';
import { Album } from '../../core/interface/album-interface';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card-component/card-component';
import { Loader } from '../../shared/loader-component/loader-component';
import { ErrorHandler } from '../../error-handler/error-handler';
@Component({
  selector: 'app-album',
  imports: [Card, Loader, ErrorHandler],
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class AlbumComponent
 {
public isLoading:boolean=true
public errorMsg:string=""
public errorCode:number=0
public filteredAlbum:Album[]=[]
public store_album: Album[] = [];

constructor(private _api:ApiService){
  this._api.getAlbums()
   
  effect(()=> {
    if(this._api.albums().length>0){
       this.filteredAlbum=this._api.albums()
     this.store_album=this._api.albums()
      this.isLoading=false
    }
  }),
    effect(()=>{
      if(this._api.albums_error()?.status){
        this.errorMsg=this._api.albums_error()?.message || "unknown error"
       this.errorCode=this._api.albums_error()?.status || 0
       this.isLoading=false
      
      
    }
  })

    }
  }