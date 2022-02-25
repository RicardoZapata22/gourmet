import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AnimationComponent } from './animation/animation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogDish} from './dialog-dish/dialog-dish.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoaderComponent, AnimationComponent,DialogDish],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [LoaderComponent, AnimationComponent, DialogDish]
})
export class ShareComponentsModule { }
