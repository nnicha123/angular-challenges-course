import { Component, Input } from '@angular/core';
import { fadeInOutAnimation } from '../../other/animations/fade-in-out.animation';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrl: './simple-popup.component.scss',
  animations: [fadeInOutAnimation]
})
export class SimplePopupComponent {
  @Input() message = '';
  isShown = false;

  show(): void {
    this.isShown = true;
    const subscription = of(null).pipe(delay(3000)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    })
  }
}
