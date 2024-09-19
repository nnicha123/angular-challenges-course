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



@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordinComponent,
    ProgressbarComponent,
    StarRatingsComponent,
    LoaderComponent,
    CreditCardInputComponent,
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
