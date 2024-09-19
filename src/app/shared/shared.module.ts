import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';



@NgModule({
  declarations: [CardComponent, BannerCutOutComponent],
  exports: [CardComponent, BannerCutOutComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
