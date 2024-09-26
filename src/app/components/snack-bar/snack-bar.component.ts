import { Component, Input, OnInit } from '@angular/core';
import { delay, of, take } from 'rxjs';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent implements OnInit {
  @Input() public message = '';
  public isShown = false;

  constructor(public snackbarService: SnackbarService) { }

  public ngOnInit(): void {
    this.snackbarService.snackbar$.subscribe((value) => {
      this.showMessage(value);
    })
  }

  public showMessage(message: string): void {
    this.isShown = true;
    this.message = message;

    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }
}
