import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Output() debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription:Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
      const debounceTimeInMs = 500;
    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe((value:any) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  @HostListener('click',['$event'])
  public clickEvent(event:any):void{
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}
