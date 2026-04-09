import { Routes } from '@angular/router';
import { PostComponent } from './features/post-component/post';
import { AlbumComponent } from './features/album-component/album';
import { TodosComponent } from './features/todos-component/todos';
import { Component } from '@angular/core';
import { devOnlyGuardedExpression } from '@angular/compiler';

export const routes: Routes = [
    {path:"",component:AlbumComponent}, //for demo purpose I have set album as default route
    {path:"post",component:PostComponent},
    {path:"album",component:AlbumComponent},
    {path:"todos",component:TodosComponent},
    {path:"**",redirectTo:"/album"} //for any invalid route it will redirect to album component - demo purpose
];

