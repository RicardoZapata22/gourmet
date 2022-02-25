import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionExistGuard, SessionNotExistGuard} from './guards/session.guard';

const routes: Routes = [
  {
    path:'login',
    canActivate:[SessionExistGuard],
    loadChildren: () => { return import('./modules/login/login.module').then(m => m.LoginModule)}
  },
  {
    path: 'home',
    canActivate: [SessionNotExistGuard],
    loadChildren: () => { return import('./modules/home/home.module').then(m => m.HomeModule)}
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
