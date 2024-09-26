import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { COMPONENT_ROUTES } from './component.routes';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { AccordinComponent } from './accordin/accordion.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { TabComponent } from './tab/tab.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutoutComponent } from './banner-cutout/banner-cutout.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordinComponent,
    ProgressbarComponent,
    StarRatingsComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterInputComponent,
    SimpleTableComponent,
    PagingComponent,
    TabComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutoutComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule { }
