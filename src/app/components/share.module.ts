import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [LoaderComponent, AnimationComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, AnimationComponent]
})
export class ShareComponentsModule { }
