import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directives.routes';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';



@NgModule({
  declarations: [DirectivesDocumentationComponent, DebounceClickDirective, RippleDirective, ScaleDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVE_ROUTES)
  ]
})
export class DirectivesModule { }
