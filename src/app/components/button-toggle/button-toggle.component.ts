import { Component, EventEmitter, Input } from '@angular/core';
import { ButtonMeta } from './button-meta.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  @Input() options:ButtonMeta[] = [];
  @Input() selection = new EventEmitter<ButtonMeta>();

  selected(selectedOption:ButtonMeta):void {
    this.options.forEach((option) => option.isActive = (selectedOption === option));
    this.selection.emit(selectedOption);
  }

}
