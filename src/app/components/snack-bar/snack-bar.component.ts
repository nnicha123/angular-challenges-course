import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent implements OnInit {
  @Input() message = '';
  isShown = false;

  constructor(public snackbarService:SnackbarService){}

  ngOnInit(): void {
      this.snackbarService.snackbar$.subscribe((value) => {
        console.log(value)
        this.showMessage(value);
      })
  }

  showMessage(value:string) {
    this.isShown = true;
    this.message = value;
    console.log(value)
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    })
  }
}
