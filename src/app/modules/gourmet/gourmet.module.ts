import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponentsModule } from 'src/app/components/share.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareComponentsModule
  ]
})
export class GourmetModule { }
