import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {WelcomeComponent} from '../welcome/welcome.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { ShareComponentsModule } from '../../components/share.module';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { GourmetModule } from '../gourmet/gourmet.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    IngredientsComponent,
    ProfileComponent
  ],
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
    GourmetModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
