import { Component, Input } from '@angular/core';
import { RibbonType } from './ribbon-type.enum';
import { RibbonLocation } from './ribbon-location.enum';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss'
})
export class RibbonComponent {
  @Input() content = '';
  @Input() location: RibbonLocation = RibbonLocation.BottomLeft;
  @Input() type: RibbonType = RibbonType.Info;
}
