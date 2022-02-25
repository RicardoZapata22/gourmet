import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponentsModule } from 'src/app/components/share.module';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareComponentsModule,
    MatGridListModule
  ],
  bootstrap: [MainComponent]
})
export class GourmetModule { }
