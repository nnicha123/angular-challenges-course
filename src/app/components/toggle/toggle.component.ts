import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input() isOn = false;
  
  toggle() {
    this.isOn = !this.isOn;
  }
}
