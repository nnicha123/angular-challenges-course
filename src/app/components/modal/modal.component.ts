import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title = '';
  isHidden = true;

  close(): void {
    this.isHidden = true;
  }

  open(): void {
    this.isHidden = false;
  }
}
