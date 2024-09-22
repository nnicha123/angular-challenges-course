import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';



@NgModule({
  declarations: [CardComponent, BannerCutOutComponent, FilterTermPipe],
  exports: [CardComponent, BannerCutOutComponent, FilterTermPipe],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
