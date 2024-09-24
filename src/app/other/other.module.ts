import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTES } from './other.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OtherDocumentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(OTHER_ROUTES)
  ]
})
export class OtherModule { }
