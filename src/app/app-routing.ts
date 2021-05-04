import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './main/user/create-user/create-user.component';


export const AppRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AppComponent
},
{
  path: 'main',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule),
},
];
