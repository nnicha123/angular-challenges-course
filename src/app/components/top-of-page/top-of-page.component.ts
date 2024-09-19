import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrl: './top-of-page.component.scss'
})
export class TopOfPageComponent {

  isShown:boolean = false;

  constructor(private viewportScoller: ViewportScroller) { }

  @HostListener('window:scroll') onWindowScroll(){
    const yCoordinate = this.viewportScoller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  goToTop(): void {
    this.viewportScoller.scrollToPosition([0, 0]);
  }

}
