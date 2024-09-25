import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES_ROUTES } from './services.routes';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user/user.service';
import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';



@NgModule({
  declarations: [ServicesDocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(SERVICES_ROUTES)
  ], 
  providers:[UserService]
})
export class ServicesModule { }
