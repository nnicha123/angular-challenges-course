import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrl: './banner-cut-out.component.scss'
})
export class BannerCutOutComponent {
  @Input() public imageUrl = 'back-4.jpg';
  @Input() public title = '100 Angular Challenge';

}
