import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cutout',
  templateUrl: './banner-cutout.component.html',
  styleUrl: './banner-cutout.component.scss'
})
export class BannerCutoutComponent {
  @Input() imageUrl = "back-1.jpg";
  @Input() title = '100 Angular Challenge';
}
