import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {DialogRandomDish, WelcomeComponent} from '../welcome/welcome.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { ShareComponentsModule } from '../../components/share.module';
import { ProfileComponent } from '../profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    IngredientsComponent,
    ProfileComponent,
    DialogRandomDish
  ],
  entryComponents: [DialogRandomDish],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    ScrollingModule,
    ShareComponentsModule,
    MatDialogModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
