import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './main/user/create-user/create-user.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    component: CreateUserComponent
},
{
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
},
];
