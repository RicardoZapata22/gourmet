import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent],
  exports: [MatSidenavModule],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
