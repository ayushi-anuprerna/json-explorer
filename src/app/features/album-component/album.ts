import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../core/interface/album';
import { ApiService } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-album',
  imports: [Card,Loader],
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class AlbumComponent// implements OnInit//
 {
public isLoading:boolean=true
public errorMsg:string=""
public errorCode:number=0
public filteredAlbum:Album[]=[]
public store_album: Album[] = [];

constructor(private _api:ApiService){
  this._api.getAlbums()
  console.log(this._api.albums.get())
}
  ngOnInit(): void {

  // this._api.getAlbums().subscribe({
  //   next: (album: Album[]) => {
  //     this.filteredAlbum=album
  //     this.store_album=album
  //     this.isLoading=false
  //   },
  //   error: (error: HttpErrorResponse) => {
  //     this.errorCode=error.status
  //     this.errorMsg=error.message
  //     this.isLoading=false

  //     const code=Math.floor(this.errorCode/100)
  //     switch(code){
  //       case 1:
  //         this.errorMsg="Your request is being processed.Please wait.."
  //         break;
  //       case 2:
  //         this.errorMsg="Request successfull.Data loaded properly"
  //         break;
  //       case 3:
  //         this.errorMsg="You are being redirected.Please wait.."
  //         break;
  //       case 4:
  //         this.errorMsg="There was an issue with your request.Please check and try again"
  //         break;
  //       case 5:
  //         this.errorMsg="Something went wrong on our side.Please try again later"
  //         break;
  //       default:
  //         this.errorMsg="Cannot recognize"
  //         break;
  //     }
  //   }
  // });
  
   
      }
}