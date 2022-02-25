import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationComponent } from '../animation/animation.component';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @ViewChild('animation', { static: false}) animation!: AnimationComponent;
  @Input() cover: boolean = false;
  @Input() text: string = 'Cargando';
  @Input() visible: boolean = false;
  sizeAnimation: string = '60px';

  constructor() {

  }

  ngOnInit(): void {
    if(this.cover) {
      this.sizeAnimation = '120px';
    }
  }

  show(text:string = '') {
    this.text = text != '' ? text : 'Cargando';
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

}
