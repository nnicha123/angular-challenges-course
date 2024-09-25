import { Component, Input } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {
  @Input() message = '';
  isShown = false;

  show() {
    this.isShown = true;
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    })
  }
}
