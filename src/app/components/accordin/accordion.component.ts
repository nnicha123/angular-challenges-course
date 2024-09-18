import { Component, Input } from '@angular/core';
import { AccordionItem } from './accodion-item.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordinComponent {
  @Input() items: AccordionItem[] = [];

  public toggle(item: AccordionItem):void {
    item.isExpanded = !item.isExpanded;
  }
}
