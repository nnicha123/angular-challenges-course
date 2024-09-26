import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public snackbar$ = new Subject<string>();

  constructor() { }

  callSnackbar(message:string):void{
    console.log(message)
    this.snackbar$.next(message);
  }
}
