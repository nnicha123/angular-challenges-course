import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';



@NgModule({
  declarations: [CardComponent, BannerCutOutComponent, FilterTermPipe, SnackBarComponent
],
  exports: [CardComponent, BannerCutOutComponent, FilterTermPipe, SnackBarComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
