import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directives.routes';



@NgModule({
  declarations: [DirectivesDocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES)
  ]
})
export class DirectivesModule { }
