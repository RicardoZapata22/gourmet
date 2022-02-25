import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { ProfileComponent } from '../profile/profile.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'welcome',
        component: WelcomeComponent
      },
      {
        path:'ingredients',
        component: IngredientsComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
