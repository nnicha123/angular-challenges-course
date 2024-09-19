import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key/sort-by-key.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';



@NgModule({
  declarations: [PipeDocumentationComponent, SortByPipe, SortByKeyPipe, TruncatePipe, CreditCardFormatterPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
