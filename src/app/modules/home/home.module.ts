import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {WelcomeComponent} from '../welcome/welcome.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
