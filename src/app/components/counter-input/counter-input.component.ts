import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss'
})
export class CounterInputComponent {
  @Input() min: number = 0;
  @Input() max: number = Number.MAX_SAFE_INTEGER;
  @Input() counter: number = 0;

  minusOne(): void {
    if(this.min < this.counter){
      this.counter--;
    }
  }

  addOne():void{
    if(this.max > this.counter){
      this.counter++;
    }
  }
}
