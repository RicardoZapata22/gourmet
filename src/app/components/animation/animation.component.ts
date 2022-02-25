import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  @ViewChild('animation', { static: false}) animationDiv!: ElementRef;
  animation: any = null;
  @Input() autoplay:boolean = true;
  @Input() loop: boolean = true;
  @Input() path: string = '';
  @Input() width: string = '120px';
  @Input() height: string = '120px';
  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.path != '') {
      this.animation = lottie.loadAnimation({
        container: this.animationDiv.nativeElement, // the dom element that will contain the animation
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        path: this.path//'./assets/animations/loader.json' // the path to the animation json
      });
    }
  }

  play() {
    if(!this.show) this.show = true;
    this.animation.play();
  }

  stop() {
    if(this.show) this.show = false;
    this.animation.stop();
  }

  goToAndStop(value:Number, isFrame:Number) {
    this.animation.goToAndStop(value, isFrame);
  }

  goToAndPlay(value:Number, isFrame:Number) {
    this.animation.goToAndPlay(value, isFrame);
  }
}
